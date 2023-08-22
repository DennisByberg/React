import { useState, useRef } from "react";
import "./VideoRecorder.scss";

interface IRecordedVideo {
  id: number;
  url: string;
}

function VideoRecorder(): JSX.Element {
  // State and ref initialization
  const videoRef = useRef<HTMLVideoElement>(null);
  const [recordedVideos, setRecordedVideos] = useState<IRecordedVideo[]>([]);
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  // Start camera function
  const startCamera = async () => {
    if (!videoRef.current) return;
    const vid: HTMLVideoElement = videoRef.current;

    try {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      vid.srcObject = stream;
      await vid.play();
    } catch (error) {
      console.error("Error starting camera:", error);
    }
  };

  // Start recording function
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "video/webm" });
        chunksRef.current = [];
        const url = URL.createObjectURL(blob);
        setRecordedVideos((prevVideos) => [
          ...prevVideos,
          { id: Date.now(), url },
        ]);
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  // Stop recording function
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setRecording(false);
  };

  return (
    <section className="video-recorder">
      <div className="video-container">
        <video ref={videoRef} muted autoPlay playsInline />
      </div>
      <div className="controls">
        <button onClick={startCamera}>Start Camera</button>
        {recording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          <button onClick={startRecording}>Start Recording</button>
        )}
      </div>
      <div className="recorded-videos">
        {recordedVideos.map((video) => (
          <video key={video.id} controls src={video.url} />
        ))}
      </div>
    </section>
  );
}

export default VideoRecorder;

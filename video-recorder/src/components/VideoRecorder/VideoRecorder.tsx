import { useState, useRef } from "react";
import "./VideoRecorder.scss";

function VideoRecorder(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [recordedVideos, setRecordedVideos] = useState<IRecordedVideo[]>([]);
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  // Funktion för att starta kameran
  const startCamera = async () => {
    // Kontrollera om videoRef har skapats
    if (!videoRef.current) return;
    const vid: HTMLVideoElement = videoRef.current;

    try {
      // Få åtkomst till kameran och mikrofonen
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      // Koppla strömmen till videon och starta uppspelning
      vid.srcObject = stream;
      await vid.play();
    } catch (error) {
      console.error("Error starting camera:", error);
    }
  };

  // Funktion för att starta inspelning
  const startRecording = async () => {
    try {
      // Få åtkomst till kameran och mikrofonen
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      // Skapa en MediaRecorder-instans och koppla till strömmen
      mediaRecorderRef.current = new MediaRecorder(stream);
      // Hantera data som blir tillgängliga under inspelning
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };
      // Hantera när inspelning stoppas
      mediaRecorderRef.current.onstop = () => {
        // Skapa en Blob av samlade data
        const blob = new Blob(chunksRef.current, { type: "video/webm" });
        chunksRef.current = [];
        // Skapa en URL för Bloben och lägg till i listan med inspelade videor
        const url = URL.createObjectURL(blob);
        setRecordedVideos((prevVideos) => [
          ...prevVideos,
          { id: Date.now(), url },
        ]);
      };

      // Starta inspelningen
      mediaRecorderRef.current.start();
      // Uppdatera state för att indikera pågående inspelning
      setRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  // Stop recording function
  const stopRecording = () => {
    // Kontrollera om det pågår en inspelning
    if (mediaRecorderRef.current) {
      // Stoppa inspelningen genom att anropa stop-metoden på MediaRecorder-instansen
      mediaRecorderRef.current.stop();
    }
    // Uppdatera state för att indikera att inspelningen har stoppats
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

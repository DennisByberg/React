import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import VideoRecorder from "./components/VideoRecorder/VideoRecorder";

function App() {
  const [isDevicesSlider, setIsDevicesSlider] = useState<boolean>(false);

  function toggleDevices() {
    // scroll to top...
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsDevicesSlider(!isDevicesSlider);
  }

  return (
    <section className="App">
      <Header title={"Video Recorder"} />
      <VideoRecorder />
      <Footer isDevicesSlider={isDevicesSlider} toggleDevices={toggleDevices} />
    </section>
  );
}

export default App;

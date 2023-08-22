import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import VideoRecorder from "./components/VideoRecorder/VideoRecorder";

function App() {
  return (
    <section className="App">
      <Header title={"Video Recorder"} />
      <VideoRecorder />
      <Footer />
    </section>
  );
}

export default App;

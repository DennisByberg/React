import "./App.css";
import Name from "./components/Name/Name";
import Image from "./components/Image/Image";
import About from "./components/About/About";

// App component
function App() {
  return (
    <div className="App">
      {/* Component for Name */}
      <Name />

      {/* Component for Image */}
      <Image />

      {/* Component for About Section */}
      <About />
    </div>
  );
}

export default App;

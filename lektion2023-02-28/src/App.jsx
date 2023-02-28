import "./App.css";
import Name from "./components/Name/Name";
import Image from "./components/Image/Image";
import About from "./components/About/About";

// En komponent i react måste alltid starta med stor bokstav...
function App() {
  return (
    <div className="App">
      <Name />
      <Image />
      <About />
    </div>
  );
}

export default App;

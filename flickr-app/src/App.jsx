import { useState } from "react";
import "./App.css";
import DisplayImages from "./components/DisplayImages/DisplayImages";
import SearchImages from "./components/SearchImages/SearchImages";

function App() {
  const [pictures, setPictures] = useState([]);

  return (
    <div className="App">
      <h1 className="App__app-name">
        flick<span className="App__app-name-r">r</span>
      </h1>
      <SearchImages setPictures={setPictures} />
      <DisplayImages pictures={pictures} />
    </div>
  );
}

export default App;

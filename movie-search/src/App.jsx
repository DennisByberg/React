import "./App.css";
import DisplayMovies from "./components/DisplayMovies/DisplayMovies";
import SearchMovies from "./components/SearchMovies/SearchMovies";

import { useState } from "react";

function App() {
  const [userSearch, setUserSearch] = useState([]);

  return (
    <div className="App">
      <SearchMovies setUserSearch={setUserSearch} />
      <DisplayMovies userSearch={userSearch} />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./SearchMovies.css";

const SearchMovies = ({ setUserSearch }) => {
  const [title, setTitle] = useState();
  const APIKEY = "http://www.omdbapi.com/?apikey=37fe945a&s=";
  const logo = "https://cdn-icons-png.flaticon.com/512/777/777242.png";

  useEffect(() => {
    async function getMovies() {
      // If-satsen finns där för att förhindra API-anropet om titeln är en tom sträng, undefined eller null eftersom det skulle vara meningslöst att fråga API:et med sådana värden.
      if (!title) return;
      const response = await fetch(`${APIKEY}${title}`);
      const jsonData = await response.json();
      setUserSearch(jsonData);
    }
    getMovies();
  }, [title]);

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <section className="search-movies">
      <img src={logo} />
      <input onChange={handleInput} type="text" />
    </section>
  );
};

export default SearchMovies;

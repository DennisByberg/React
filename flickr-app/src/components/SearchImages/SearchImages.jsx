import { useState } from "react";
import "./SearchImages.css";

const SearchImages = ({ setPictures }) => {
  const API_KEY = "8f0abbb9fa953c1b610f901f1a82665d";
  const [input, setInput] = useState("");

  async function getPictures() {
    const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${input}&per_page=10&format=json&nojsoncallback=1`;

    const response = await fetch(URL);
    const data = await response.json();
    setPictures(data.photos.photo);
  }

  function getInput(e) {
    setInput(e.target.value);
  }

  return (
    <section className="search-images">
      <input
        placeholder="Enter search word..."
        onChange={getInput}
        type="text"
      />
      <button onClick={getPictures}>SEARCH</button>
    </section>
  );
};

export default SearchImages;

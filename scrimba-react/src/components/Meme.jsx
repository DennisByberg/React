import React from "react";
import "./Meme.css";

const Meme = () => {
  return (
    <form>
      <div className="inputs-container">
        <input type="text" placeholder="Top Text..." />
        <input type="text" placeholder="Bottom Text..." />
      </div>
      <button className="new-meme-btn">Get a new meme image</button>
    </form>
  );
};

export default Meme;

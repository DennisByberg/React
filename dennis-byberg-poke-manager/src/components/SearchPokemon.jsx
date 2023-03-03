import React, { useEffect, useState } from "react";
import classes from "./SearchPokemon.module.css";

const SearchPokemon = ({ addToTeam, buttonText }) => {
  const [pokemon, setPokemon] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const asyncOnSearch = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
      );
      const json = await response.json();
      setPokemon(json.results);
    };
    asyncOnSearch();
  }, []);

  return (
    <div className={classes.searchpokemon}>
      <input
        className={classes.searchinput}
        type="text"
        placeholder="Search pokemons..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <ul className={classes.pokeullist}>
        {pokemon
          .filter((p) => p.name.toLowerCase().includes(text.toLowerCase()))
          .map((p) => (
            <li className={classes.pokelist} key={p.name}>
              {p.name}
              <button
                onClick={() => addToTeam(p.name)}
                className={classes.addtoteambutton}
              >
                {buttonText}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchPokemon;

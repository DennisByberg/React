import React from "react";
import SearchPokemon from "../components/SearchPokemon";

const SearchPage = ({ buttonText, addToTeam, team, setTeam }) => {
  return (
    <div>
      <SearchPokemon
        team={team}
        setTeam={setTeam}
        addToTeam={addToTeam}
        buttonText={buttonText}
      />
    </div>
  );
};

export default SearchPage;

// Saknas enligt mig:

// Lite mer information om pokemonen t.ex bild och vad det är för typ av pokemon, men hann tyvärr inte implementera detta... tråkigt :(

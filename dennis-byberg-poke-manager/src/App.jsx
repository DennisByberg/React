import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import TeamPage from "./pages/TeamPage";
import Layout from "./components/layout/Layout";
import { useState } from "react";

function App() {
  const [team, setTeam] = useState([]);

  // ButtonText ville jag ändra när jag tryckte på den men hann tyvärr ej.
  const [buttonText] = useState("Add To Team");

  const addToTeamHandler = (name) => {
    setTeam([...team, { name }]);
  };

  const deleteFromTeamHandler = (name) => {
    const newTeam = team.filter((poke) => poke.name !== name);
    setTeam(newTeam);
  };

  const changeName = (name) => {
    const changedName = prompt(
      "What do you want to change the pokemons name to?"
    );

    // Byte av pokemon namn till mindre än 3 bokstäver ej tillåtet.
    if (changedName.length > 2) {
      const newTeam = team.filter((poke) => poke.name !== name);
      setTeam(newTeam);
      name = changedName;
      setTeam([...newTeam, { name }]);
    } else {
      alert("Your new name needs to be 3 or more letters");
    }
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/search"
          element={
            <SearchPage
              team={team}
              setTeam={setTeam}
              addToTeam={addToTeamHandler}
              buttonText={buttonText}
            />
          }
        />
        <Route
          path="/team"
          element={
            <TeamPage
              team={team}
              setTeam={setTeam}
              changeName={changeName}
              deleteFromTeam={deleteFromTeamHandler}
            />
          }
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;

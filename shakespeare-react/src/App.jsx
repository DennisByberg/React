import "./App.css";
import Insult from "./components/Insult/Insult";
import insultData from "../src/insultData";
import AddInsult from "./components/AddInsult/AddInsult";

function App() {
  const insults = insultData.map((insult) => {
    return (
      <Insult
        key={insult.id}
        insultText={insult.insultText}
        play={insult.play}
      />
    );
  });

  function addNewInsult(newInsult, newPlay) {
    const newInsultObject = {
      id: insults.length + 1,
      insultText: newInsult,
      play: newPlay,
    };

    insults.push(newInsultObject);
    console.log(insults);
  }

  return (
    <div className="App">
      <h1>Shakespeare Insults</h1>
      <AddInsult addNewInsult={addNewInsult} />
      <ul>{insults}</ul>
    </div>
  );
}

export default App;

import "./App.css";
import Insult from "./components/Insult/Insult";
import AddInsult from "./components/AddInsult/AddInsult";
import { useState } from "react";

function App() {
  const [insults, setInsults] = useState([
    {
      id: 1,
      insultText:
        "Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?",
      play: "Macbeth",
    },
    {
      id: 2,
      insultText: "Never hung poison on a fouler toad",
      play: "Richard III",
    },
  ]);

  const insultsComponent = insults.map((insult) => {
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

    // create a copy of insults array using spread operator
    const temp = [...insults];

    // add a new insult object to the temp array
    temp.push(newInsultObject);

    // update the state of Insults using setInsults method by passing temp array as argument
    setInsults(temp);
  }

  return (
    <div className="App">
      <h1>Shakespeare Insults</h1>
      <AddInsult addNewInsult={addNewInsult} />
      <ul>{insultsComponent}</ul>
    </div>
  );
}

export default App;

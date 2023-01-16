import Joke from "./components/Joke";
import Jokes from "../jokes.json";

function App() {
  const displayJokes = Jokes.allJokes.map((joke) => {
    return <Joke key={joke.id} joke={joke} />;
  });

  return <div className="App">{displayJokes}</div>;
}

export default App;

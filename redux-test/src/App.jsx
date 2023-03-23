import "./App.css";
import { useDispatch } from "react-redux";
import { increase, decrease } from "./Actions/counterActions";
import ViewCounter from "./ViewCounter";

function App() {
  const dispatch = useDispatch();

  // ADD
  function handleAdd() {
    dispatch(increase(1));
  }

  // Decrese
  function handleDecrese() {
    dispatch(decrease(10 - 9));
  }

  return (
    <div className="App">
      <button onClick={handleDecrese}>Sänk</button>
      <ViewCounter />
      <button onClick={handleAdd}>Öka</button>
    </div>
  );
}

export default App;

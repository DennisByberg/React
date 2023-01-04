import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    if (count < 10) setCount(count + 1);
  };

  const decreaseOne = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div id="counter-section">
      <h1>Counter</h1>
      <div id="buttons-and-number">
        <button onClick={decreaseOne}>-</button>
        <p>{count}</p>
        <button onClick={addOne}>+</button>
      </div>
    </div>
  );
};

export default Counter;

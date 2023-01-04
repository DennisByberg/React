import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dennis");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Dennis", "Kevin", "Erik"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = () => {
    console.log(count);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <h2>Hello</h2>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Counter</button>
      <button onClick={handleClick2}>Click Me 2</button>
    </main>
  );
};

export default Content;

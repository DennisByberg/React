import React from "react";

const Content = () => {
  const handleClick = () => {
    console.log("You Clicked It!");
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <h2>Hello</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2("Dennis")}>Click Me 2</button>
      <button onClick={(e) => handleClick3(e)}>Click Me 3</button>
    </main>
  );
};

export default Content;

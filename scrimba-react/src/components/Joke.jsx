import React from "react";

const Joke = ({ joke }) => {
  return (
    <main>
      <h1 className="joke-setup">{joke.setup}</h1>
      <h2 className="joke-punchline">{joke.punchline}</h2>
    </main>
  );
};

export default Joke;

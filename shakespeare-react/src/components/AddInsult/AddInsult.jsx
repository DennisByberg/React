import "./AddInsult.css";

const AddInsult = ({ addNewInsult }) => {
  let insultInput = "";
  let playInput = "";

  function handleInsult(event) {
    insultInput = event.target.value;
  }

  function handlePlay(event) {
    playInput = event.target.value;
  }

  function handleAddInsult() {
    addNewInsult(insultInput, playInput);
  }
  return (
    <section className="add-insult">
      <div className="add-insult__insult-and-play-container">
        <div className="add-insult__insult-container">
          <label htmlFor="insult">insult: </label>
          <input onChange={handleInsult} id="insult" type="text" />
        </div>

        <div className="add-insult__play-container">
          <label htmlFor="play">play: </label>
          <input onChange={handlePlay} id="play" type="text" />
        </div>
      </div>
      <button onClick={handleAddInsult}>ADD INSULT</button>
    </section>
  );
};

export default AddInsult;

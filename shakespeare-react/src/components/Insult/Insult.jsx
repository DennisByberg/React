import "./Insult.css";

const Insult = ({ insultText, play }) => {
  return (
    <section className="insult">
      <li className="insult__item">
        <p className="insult__insult-text">{insultText}</p>
        <p className="insult__insult-play">~ {play} ~</p>
      </li>
    </section>
  );
};

export default Insult;

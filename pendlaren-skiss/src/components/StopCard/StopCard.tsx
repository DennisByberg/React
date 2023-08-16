// SCSS.
import "./StopCard.scss";

function StopCard({ nameOfStop, extId }) {
  const API_KEY = "73f1d3b1-8698-4efb-94d9-f2fb1704bf06";

  async function getPoleTimeTables(extId: string) {
    console.log(extId);
    console.log(API_KEY);

    const URL = `https://api.resrobot.se/v2.1/departureBoard?id=${extId}&format=json&accessId=${API_KEY}`;
    const response = await fetch(URL);

    const data = await response.json();
    console.log(data);
  }

  return (
    <section className="stop-card">
      <h1
        onClick={() => getPoleTimeTables(extId)}
        className="stop-card__name-of-stop"
      >
        {nameOfStop}
      </h1>
    </section>
  );
}

export default StopCard;

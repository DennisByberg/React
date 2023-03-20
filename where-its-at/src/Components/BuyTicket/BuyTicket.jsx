import "./BuyTicket.css";

const BuyTicket = ({ name, price, location, date, eventStart, eventStop }) => {
  return (
    <section className="buy-ticket">
      <h1 className="buy-ticket__name">{name}</h1>
      <h2 className="buy-ticket__when">
        {date} kl {eventStart} - {eventStop}
      </h2>
      <p className="buy-ticket__location">@ {location}</p>
      <p className="buy-ticket__price">
        {price < 1 ? "GRATIS" : `${price} sek`}
      </p>
    </section>
  );
};

export default BuyTicket;

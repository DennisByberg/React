import "./Ticket.css";

const Ticket = ({ name, price, location, date, eventStart, eventStop }) => {
  return (
    <li className="ticket">
      <div className="ticket__date-container">
        <p className="ticket__date">{date}</p>
      </div>

      <div className="ticket__info-container">
        <p className="ticket__name">{name}</p>
        <p className="ticket__location">{location}</p>
        <div className="ticket__start-stop-price-container">
          <p className="ticket__event-start">
            {eventStart} - {eventStop}
          </p>
          <p className="ticket__price">
            {price < 1 ? "GRATIS" : `${price} sek`}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Ticket;

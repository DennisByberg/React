import "./ConfirmationTicket.css";

const ConfirmationTicket = ({
  name,
  location,
  date,
  eventStart,
  eventStop,
}) => {
  return (
    <section className="confirmation-ticket">
      <div className="confirmation-ticket__top-container">
        <p>WHAT</p>
        <p>{name}</p>
      </div>

      <div className="confirmation-ticket__middle-container">
        <p>WHERE</p>
        <p>{location}</p>
      </div>

      <div className="confirmation-ticket__bottom-container">
        <div>
          <p>WHEN</p>
          <p>{date}</p>
        </div>
        <div>
          <p>FROM</p>
          <p>{eventStart}</p>
        </div>
        <div>
          <p>TO</p>
          <p>{eventStop}</p>
        </div>
      </div>
    </section>
  );
};

export default ConfirmationTicket;

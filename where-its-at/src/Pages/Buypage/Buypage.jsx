import "./Buypage.css";
import BuyTicket from "../../Components/BuyTicket/BuyTicket";
import { useLocation, useNavigate } from "react-router-dom";

const Buypage = () => {
  const selectedTicket = useLocation();
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/confirmation`, { state: { selectedTicket: selectedTicket } });
  }

  return (
    <section className="buy-page">
      <p className="buy-page-you-are-about-text">
        You are about to score some tickets to
      </p>
      {selectedTicket ? (
        <article>
          <BuyTicket
            name={selectedTicket.state.selectedTicket.name}
            price={selectedTicket.state.selectedTicket.price}
            location={selectedTicket.state.selectedTicket.location}
            date={selectedTicket.state.selectedTicket.date}
            eventStart={selectedTicket.state.selectedTicket.eventStart}
            eventStop={selectedTicket.state.selectedTicket.eventStop}
          />
          <button onClick={handleNavigation}>Beställ</button>
        </article>
      ) : (
        ""
      )}
    </section>
  );
};

export default Buypage;

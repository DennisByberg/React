import "./ConfirmationPage.css";
import ConfirmationTicket from "../../Components/ConfirmationTicket/ConfirmationTicket";
import { useLocation } from "react-router-dom";

const ConfirmationPage = () => {
  const selectedTicket = useLocation();
  console.log(selectedTicket);

  return (
    <section className="confirmation-page">
      <h1>Tack För Din Beställning</h1>
      {selectedTicket ? (
        <ConfirmationTicket
          name={selectedTicket.state.selectedTicket.state.selectedTicket.name}
          location={
            selectedTicket.state.selectedTicket.state.selectedTicket.location
          }
          date={selectedTicket.state.selectedTicket.state.selectedTicket.date}
          eventStart={
            selectedTicket.state.selectedTicket.state.selectedTicket.eventStart
          }
          eventStop={
            selectedTicket.state.selectedTicket.state.selectedTicket.eventStop
          }
        />
      ) : (
        ""
      )}
      <a className="btn btn-border-3" href="/">
        HOME
      </a>
    </section>
  );
};

export default ConfirmationPage;

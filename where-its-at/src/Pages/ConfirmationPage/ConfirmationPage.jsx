import "./ConfirmationPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ConfirmationTicket from "../../Components/ConfirmationTicket/ConfirmationTicket";

const ConfirmationPage = () => {
  const params = useParams();

  const [tickets, setTickets] = useState([]);
  const [currentTicket, setCurrentTicket] = useState();

  useEffect(() => {
    async function getTickets() {
      const response = await fetch(
        `https://my-json-server.typicode.com/zocom-christoffer-wallenberg/where-its-at-api/events`
      );
      const data = await response.json();
      setTickets(data);
    }
    getTickets();
  }, []);

  useEffect(() => {
    getTicket();
  }, [tickets]);

  function getTicket() {
    const foundTicket = tickets.filter((ticket) => {
      if (ticket.name === params.ticket) {
        return ticket;
      }
    });
    setCurrentTicket(foundTicket[0]);
  }

  return (
    <section className="confirmation-page">
      <h1>Tack För Din Beställning</h1>
      {currentTicket ? (
        <ConfirmationTicket
          name={currentTicket.name}
          location={currentTicket.where}
          date={currentTicket.when.date}
          eventStart={currentTicket.when.from}
          eventStop={currentTicket.when.to}
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

import { useEffect, useState } from "react";
import "./Homepage.css";
import Ticket from "../../Components/Ticket/Ticket";
import { useNavigate, Link } from "react-router-dom";

const Homepage = () => {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

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

  function handleSelectedTicket(selectedTicket) {
    const {
      name,
      price,
      where,
      when: { date, from, to },
    } = selectedTicket;
    const selectedTicketObject = {
      name,
      price,
      location: where,
      date,
      eventStart: from,
      eventStop: to,
    };
    navigate("/ticket/", { state: { selectedTicket: selectedTicketObject } });
  }

  const ticketsComponents = tickets.map((ticket) => {
    return (
      <a onClick={() => handleSelectedTicket(ticket)} key={ticket.name}>
        <Ticket
          name={ticket.name}
          price={ticket.price}
          location={ticket.where}
          date={ticket.when.date}
          eventStart={ticket.when.from}
          eventStop={ticket.when.to}
        />
      </a>
    );
  });

  return (
    <section className="homepage">
      <h1>Events</h1>
      <ul className="homepage__tickets-components">{ticketsComponents}</ul>
    </section>
  );
};

export default Homepage;

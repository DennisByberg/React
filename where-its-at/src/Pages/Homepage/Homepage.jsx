import { useEffect, useState } from "react";
import "./Homepage.css";
import Ticket from "../../Components/Ticket/Ticket";

const Homepage = () => {
  const [tickets, setTickets] = useState([]);

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

  const ticketsComponents = tickets.map((ticket) => {
    return (
      <a href={`/ticket/${ticket.name}`} key={ticket.name}>
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

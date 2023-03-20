import "./Buypage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BuyTicket from "../../Components/BuyTicket/BuyTicket";

const Buypage = () => {
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
    <section className="buy-page">
      <p className="buy-page-you-are-about-text">
        You are about to score some tickets to
      </p>
      {currentTicket ? (
        <article>
          <BuyTicket
            name={currentTicket.name}
            price={currentTicket.price}
            location={currentTicket.where}
            date={currentTicket.when.date}
            eventStart={currentTicket.when.from}
            eventStop={currentTicket.when.to}
          />
          <a href={`/confirmation/${currentTicket.name}`}>
            <button>Beställ</button>
          </a>
        </article>
      ) : (
        ""
      )}
    </section>
  );
};

export default Buypage;

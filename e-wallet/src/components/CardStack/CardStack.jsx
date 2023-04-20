// sass
import "./CardStack.scss";
//react-redux
import { useSelector } from "react-redux";
//components
import Card from "../Card/Card";

function CardStack() {
  const { cards } = useSelector((state) => state.cards);

  const cardsComponents = cards.map((card) => {
    return (
      <Card
        key={card.cardNumber}
        cardholderName={card.cardholderName}
        cardNumber={card.cardNumber}
        validThru={card.validThru}
        ccv={card.ccv}
        vendor={card.vendor}
      />
    );
  });

  return (
    <section className="card-stack">
      {cards.length ? (
        <ul className="card-stack__ul">{cardsComponents}</ul>
      ) : (
        <h3>NO CARDS IN CARDSTACK</h3>
      )}
    </section>
  );
}
export default CardStack;

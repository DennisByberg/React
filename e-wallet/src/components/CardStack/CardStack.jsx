// sass
import "./CardStack.scss";
//react-redux
import { useSelector } from "react-redux";
//components
import Card from "../Card/Card";

function CardStack() {
  const { cards } = useSelector((state) => state);

  const cardsComponents = cards.map((card) => {
    return (
      <Card
        key={card.cardNumber}
        cardholderName={card.cardholderName}
        cartNumber={card.cardNumber}
        validThru={card.validThru}
        ccv={card.ccv}
        vendor={card.vendor}
      />
    );
  });

  return (
    <section className="card-stack">
      <ul className="card-stack__ul">{cardsComponents}</ul>
    </section>
  );
}
export default CardStack;

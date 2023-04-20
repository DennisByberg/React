// sass
import "./Card.scss";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveCard,
  deleteCardFromCardStack,
  addNewCardToCardStack,
} from "../../redux/cards";

import crossPNG from "../../assets/cross.png";

function Card({ cardholderName, cardNumber, validThru, ccv, vendor }) {
  const dispatch = useDispatch();
  const { activeCard } = useSelector((state) => state.cards);

  // returnerar en bakgrundsfärg baserat på vilken kortleverantör som är aktiv.
  function getBGColor() {
    switch (vendor) {
      case "bitcoin":
        return "#ffae34";
      case "evil":
        return "#f33355";
      case "blockchain":
        return "#8b58f9";
      case "ninja":
        return "#222222";
      // om något går fel:
      default:
        break;
    }
  }

  // returnerar en textfärg baserat på vilken kortleverantör som är aktiv.
  function getTextColor() {
    return vendor === "bitcoin" ? "#222222" : "#ffffff";
  }

  // hanterar borttagning av kort från Card-Stack.
  function handleDeleteCard(e) {
    e.stopPropagation();
    dispatch(deleteCardFromCardStack(cardNumber));
  }

  // definierar ett nytt aktivt kort-objekt med egenskaperna id, kortnummer, kortinnehavarens namn, giltighetstid, ccv och kortleverantör.
  function handleCardClick() {
    const newActiveCard = {
      id: cardNumber,
      cardNumber: cardNumber,
      cardholderName: cardholderName,
      validThru: validThru,
      ccv: ccv,
      vendor: vendor,
    };

    // Pusha in active card till cards
    dispatch(addNewCardToCardStack(activeCard));
    // Gör active card till det card vi trycker på...
    dispatch(setActiveCard(newActiveCard));
    // Ta bort det card vi tryckte på för att dölja det från card stack
    dispatch(deleteCardFromCardStack(newActiveCard.id));
  }

  return (
    <section
      className="card"
      style={{ backgroundColor: getBGColor(), color: getTextColor() }}
      onClick={handleCardClick}
    >
      <div onClick={handleDeleteCard} className="card__delete-button">
        <img src={crossPNG} />
      </div>

      <div className="card__chip-and-vendor-container">
        <img
          src={`../src/assets/chip-${
            vendor === "bitcoin" ? "dark" : "light"
          }.svg`}
        />
        <img src={`../src/assets/vendor-${vendor}.svg `} />
      </div>

      <p className="card__cart-number">{cardNumber}</p>

      <div className="card__card-holder-name-and-valid-thru-container">
        <div
          style={{ color: getTextColor() }}
          className="card__cardholder-name-container"
        >
          <p>CARDHOLDER NAME</p>
          <p>{cardholderName}</p>
        </div>
        <div className="card__valid-thru-container">
          <p>VALID THRU</p>
          <p>{validThru}</p>
        </div>
      </div>
    </section>
  );
}

export default Card;

// sass
import "./ActiveCard.scss";
// redux
import { useSelector } from "react-redux";
// react
import React, { useState } from "react";

function ActiveCard() {
  const { activeCard } = useSelector((state) => state.cards);
  const [isFlipped, setIsFlipped] = useState(false);

  function handleCardClick() {
    setIsFlipped(!isFlipped);
  }

  function getBGColor() {
    switch (activeCard.vendor) {
      case "bitcoin":
        return "#ffae34";
      case "evil":
        return "#f33355";
      case "blockchain":
        return "#8b58f9";
      case "ninja":
        return "#222222";

      //if something goes wrong...
      default:
        break;
    }
  }

  function getTextColor() {
    return activeCard.vendor === "bitcoin" ? "#222222" : "#ffffff";
  }

  return !isFlipped ? (
    <section
      className={`active-card ${isFlipped ? "flipped" : ""}`}
      style={{ backgroundColor: getBGColor(), color: getTextColor() }}
      onClick={handleCardClick}
    >
      <div className="active-card__chip-and-vendor-container">
        <img
          src={`../src/assets/chip-${
            activeCard.vendor === "bitcoin" ? "dark" : "light"
          }.svg`}
        />
        <img src={`../src/assets/vendor-${activeCard.vendor}.svg `} />
      </div>

      <p className="card__cart-number">{activeCard.cardNumber}</p>

      <div className="active-card__card-holder-name-and-valid-thru-container">
        <div className="active-card__cardholder-name-container">
          <p>CARDHOLDER NAME</p>
          <p>{activeCard.cardholderName}</p>
        </div>
        <div className="active-card__valid-thru-container">
          <p>VALID THRU</p>
          <p>{activeCard.validThru}</p>
        </div>
      </div>
    </section>
  ) : (
    <section
      className={`active-card ${isFlipped ? "flipped" : ""}`}
      style={{ backgroundColor: getBGColor(), color: getTextColor() }}
      onClick={handleCardClick}
    >
      <div
        className={
          activeCard.vendor === "ninja"
            ? "active-card__magnetic-stripe-light"
            : "active-card__magnetic-stripe"
        }
      ></div>
      <div className="active-card__ccv-container">
        <p>CCV</p>
        <p>{activeCard.ccv}</p>
      </div>
    </section>
  );
}
export default ActiveCard;

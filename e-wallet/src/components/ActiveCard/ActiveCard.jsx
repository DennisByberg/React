// sass
import "./ActiveCard.scss";
// redux
import { useSelector } from "react-redux";

function ActiveCard() {
  const { activeCard } = useSelector((state) => state.cards);

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

  return (
    <section
      className="card"
      style={{ backgroundColor: getBGColor(), color: getTextColor() }}
    >
      <div className="card__chip-and-vendor-container">
        <img
          src={`../src/assets/chip-${
            activeCard.vendor === "bitcoin" ? "dark" : "light"
          }.svg`}
        />
        <img src={`../src/assets/vendor-${activeCard.vendor}.svg `} />
      </div>

      <p className="card__cart-number">{activeCard.cardNumber}</p>

      <div className="card__card-holder-name-and-valid-thru-container">
        <div className="card__cardholder-name-container">
          <p>CARDHOLDER NAME</p>
          <p>{activeCard.cardholderName}</p>
        </div>
        <div className="card__valid-thru-container">
          <p>VALID THRU</p>
          <p>{activeCard.validThru}</p>
        </div>
      </div>
    </section>
  );
}
export default ActiveCard;

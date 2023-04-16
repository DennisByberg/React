import "./NewCard.scss";

function NewCard({ cardNumber, cardholderName, validThru, ccv, vendor }) {
  function getBGColorOnNewCard() {
    switch (vendor) {
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
        return "#D0D0D0";
    }
  }

  function getTextColor() {
    console.log(vendor);
    return vendor === "bitcoin" || vendor === undefined || vendor === ""
      ? "#222222"
      : "#ffffff";
  }

  return (
    <section
      className="new-card"
      style={{ backgroundColor: getBGColorOnNewCard(), color: getTextColor() }}
    >
      <div className="new-card__chip-and-vendor-container">
        <img
          src={`../src/assets/chip-${
            vendor === "bitcoin" || vendor === undefined || vendor === ""
              ? "dark"
              : "light"
          }.svg`}
        />
        <img src={`../src/assets/vendor-${vendor ? vendor : "bitcoin"}.svg `} />
      </div>

      <p className="new-card__cart-number">{cardNumber}</p>

      <div
        style={{ color: getTextColor() }}
        className="new-card__card-holder-name-and-valid-thru-container"
      >
        <div className="new-card__cardholder-name-container">
          <p>CARDHOLDER NAME</p>
          <p>{cardholderName}</p>
        </div>
        <div className="new-card__valid-thru-container">
          <p>VALID THRU</p>
          <p>{validThru}</p>
        </div>
      </div>
    </section>
  );
}
export default NewCard;

// sass
import "./Card.scss";

function Card({ cardholderName, cartNumber, validThru, ccv, vendor }) {
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

      //if something goes wrong...
      default:
        break;
    }
  }

  return (
    <section className="card" style={{ backgroundColor: getBGColor() }}>
      <div className="card__chip-and-vendor-container">
        <img src="../src/assets/chip-dark.svg" />
        {vendor ? <img src={`../src/assets/vendor-${vendor}.svg `} /> : ""}
      </div>

      <p className="card__cart-number">{cartNumber}</p>

      <div className="card__card-holder-name-and-valid-thru-container">
        <div className="card__cardholder-name-container">
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

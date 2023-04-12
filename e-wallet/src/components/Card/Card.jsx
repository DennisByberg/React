// sass
import "./Card.scss";

function Card({ cardHolderName, cartNumber, validThru, ccv, vendor }) {
  return (
    <section className="card">
      <div className="card__chip-and-vendor-container">
        <img src="../src/assets/chip-dark.svg" />
        <img src="../src/assets/vendor-bitcoin.svg" />
      </div>

      <p className="card__cart-number">{cartNumber}</p>

      <div className="card__card-holder-name-and-valid-thru-container">
        <div className="card__cardholder-name-container">
          <p>CARDHOLDER NAME</p>
          <p>{cardHolderName}</p>
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

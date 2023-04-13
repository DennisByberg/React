import "./NewCard.scss";

function NewCard({ cardNumber, cardholderName, validThru, ccv, vendor }) {
  return (
    <section className="new-card">
      <div className="new-card__chip-and-vendor-container">
        <img src="../src/assets/chip-dark.svg" />
        <img src="../src/assets/vendor-bitcoin.svg" />
      </div>

      <p className="new-card__cart-number">{cardNumber}</p>

      <div className="new-card__card-holder-name-and-valid-thru-container">
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

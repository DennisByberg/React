import "./NewCard.scss";

function NewCard({
  vendor,
  validThruYY,
  validThruMM,
  firstName,
  lastName,
  cardNumberSectionOne,
  cardNumberSectionTwo,
  cardNumberSectionThree,
  cardNumberSectionFour,
}) {
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

      <div className="new-card__card-number-sections-container">
        <p className="new-card__cart-number">
          {cardNumberSectionOne ? cardNumberSectionOne : "XXXX"}
        </p>
        <p className="new-card__cart-number">
          {cardNumberSectionTwo ? cardNumberSectionTwo : "XXXX"}
        </p>
        <p className="new-card__cart-number">
          {cardNumberSectionThree ? cardNumberSectionThree : "XXXX"}
        </p>
        <p className="new-card__cart-number">
          {cardNumberSectionFour ? cardNumberSectionFour : "XXXX"}
        </p>
      </div>

      <div
        style={{ color: getTextColor() }}
        className="new-card__card-holder-name-and-valid-thru-container"
      >
        <div className="new-card__cardholder-name-container">
          <p className="new-card__cardholder-name">CARDHOLDER NAME</p>
          <div className="new-card__firstname-and-lastname-container">
            <p className="text-shadow">
              {firstName ? firstName.toUpperCase() : "FIRSTNAME"}
            </p>

            <p className="text-shadow">
              {lastName ? lastName.toUpperCase() : "LASTNAME"}
            </p>
          </div>
        </div>

        <div className="new-card__valid-thru-container">
          <p className="new-card__valid-thru-txt">VALID THRU</p>
          <div className="new-card__valid-thru-mm-and-yy-container">
            <p className="text-shadow">{validThruMM ? validThruMM : "MM"}</p>/
            <p className="text-shadow">{validThruYY ? validThruYY : "YY"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewCard;

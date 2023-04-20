import "./NewCard.scss";

function NewCard(newCardData) {
  // returnerar en bakgrundsfärg baserat på vilken kortleverantör som är aktiv.
  function getBGColorOnNewCard() {
    switch (newCardData.vendor) {
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

  // returnerar en textfärg baserat på vilken kortleverantör som är aktiv.
  function getTextColor() {
    return newCardData.vendor === "bitcoin" ||
      newCardData.vendor === undefined ||
      newCardData.vendor === ""
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
            newCardData.vendor === "bitcoin" ||
            newCardData.vendor === undefined ||
            newCardData.vendor === ""
              ? "dark"
              : "light"
          }.svg`}
        />
        <img
          src={`../src/assets/vendor-${
            newCardData.vendor ? newCardData.vendor : "bitcoin"
          }.svg `}
        />
      </div>

      <div className="new-card__card-number-sections-container">
        <p className="new-card__cart-number">
          {newCardData.cardNumberSectionOne
            ? newCardData.cardNumberSectionOne
            : "XXXX"}
        </p>
        <p className="new-card__cart-number">
          {newCardData.cardNumberSectionTwo
            ? newCardData.cardNumberSectionTwo
            : "XXXX"}
        </p>
        <p className="new-card__cart-number">
          {newCardData.cardNumberSectionThree
            ? newCardData.cardNumberSectionThree
            : "XXXX"}
        </p>
        <p className="new-card__cart-number">
          {newCardData.cardNumberSectionFour
            ? newCardData.cardNumberSectionFour
            : "XXXX"}
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
              {newCardData.firstName
                ? newCardData.firstName.toUpperCase()
                : "FIRSTNAME"}
            </p>

            <p className="text-shadow">
              {newCardData.lastName
                ? newCardData.lastName.toUpperCase()
                : "LASTNAME"}
            </p>
          </div>
        </div>

        <div className="new-card__valid-thru-container">
          <p className="new-card__valid-thru-txt">VALID THRU</p>
          <div className="new-card__valid-thru-mm-and-yy-container">
            <p className="text-shadow">
              {newCardData.validThruMM ? newCardData.validThruMM : "MM"}
            </p>
            /
            <p className="text-shadow">
              {newCardData.validThruYY ? newCardData.validThruYY : "YY"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewCard;

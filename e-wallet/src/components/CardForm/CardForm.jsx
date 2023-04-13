// sass
import "./CardForm.scss";

const Form = ({
  setCardNumber,
  setCardholderName,
  setValidThru,
  setCcv,
  setVendor,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form__group">
        <label className="form__label" htmlFor="cardNumber">
          CARD NUMBER
        </label>
        <input
          className="form__input"
          type="text"
          id="cardNumber"
          // value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="cardholderName">
          CARDHOLDER NAME
        </label>
        <input
          className="form__input"
          type="text"
          id="cardholderName"
          // value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />
      </div>

      <div className="form__group-valid-and-ccv">
        <div className="form__group-valid">
          <label className="form__label" htmlFor="validThru">
            VALID THRU
          </label>
          <input
            className="form__input"
            type="text"
            id="validThru"
            // value={validThru}
            onChange={(e) => setValidThru(e.target.value)}
          />
        </div>
        <div className="form__group-ccv">
          <label className="form__label" htmlFor="ccv">
            CCV
          </label>
          <input
            className="form__input"
            type="text"
            id="ccv"
            // value={ccv}
            onChange={(e) => setCcv(e.target.value)}
          />
        </div>
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="vendor">
          VENDOR
        </label>
        <select
          className="form__select"
          id="vendor"
          // value={vendor}
          onChange={(e) => setVendor(e.target.value)}
        >
          <option value=""></option>
          <option value="bitcoin">BITCOIN INC</option>
          <option value="ninja">NINJA BANK</option>
          <option value="blockchain">BLOCK CHAIN INC</option>
          <option value="evil">EVIL CORP</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

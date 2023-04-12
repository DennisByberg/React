// react
import { useState } from "react";
// sass
import "./CardForm.scss";

const Form = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [validThru, setValidThru] = useState("");
  const [ccv, setCcv] = useState("");
  const [vendor, setVendor] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
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
          value={cardNumber}
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
          value={cardholderName}
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
            value={validThru}
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
            value={ccv}
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
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
        >
          <option value=""></option>
          <option value="bitcoin">BITCOIN INC</option>
          <option value="ninjabank">NINJA BANK</option>
          <option value="blockchaicinc">BLOCK CHAIN INC</option>
          <option value="evilcorp">EVIL CORP</option>
        </select>
      </div>
      <button className="form__button" type="submit">
        ADD CARD
      </button>
    </form>
  );
};

export default Form;

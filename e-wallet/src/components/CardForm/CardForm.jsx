// sass
import "./CardForm.scss";

const Form = ({
  setCardNumber,
  setCardholderName,
  setValidThru,
  setCcv,
  setVendor,
  isCcvValid,
  setIsCcvValid,
  setIsVendorValid,
  isVendorValid,
  validThruMM,
  validThruYY,
  setValidThruMM,
  setValidThruYY,
  setIsValidThruMMValid,
  setIsValidThruYYValid,
  isValidThruYYValid,
  isValidThruMMValid,
}) => {
  // HANDLES
  function handleCCV(e) {
    setIsCcvValid(validateCcv(e.target.value));
    setCcv(e.target.value);
  }

  function handleVendor(e) {
    setIsVendorValid(validateVendor(e.target.value));
    setVendor(e.target.value);
  }

  function handleValidThruMM(e) {
    setIsValidThruMMValid(validateValidThru(e.target.value));
    setValidThruMM(e.target.value);
    console.log(isValidThruMMValid);
  }

  function handleValidThruYY(e) {
    setIsValidThruYYValid(validateValidThru(e.target.value));
    setValidThruYY(e.target.value);
  }

  // VALIDATES

  function validateCcv(ccv) {
    // Check if ccv is a 3-digit number...
    if (ccv.length === 3 && !isNaN(ccv)) {
      // Parse ccv to an integer
      const ccvNumber = parseInt(ccv, 10);
      // Check if ccvNumber is within the range of 0 to 999
      if (ccvNumber >= 0 && ccvNumber <= 999) {
        return true;
      }
    }
    return false;
  }

  function validateVendor(vendor) {
    return vendor.length > 0;
  }

  function validateValidThru(MMorYY) {
    // Check if ccv is a 3-digit number...
    if (MMorYY.length === 2 && !isNaN(MMorYY)) {
      // Parse ccv to an integer
      const MMorYYNumber = parseInt(MMorYY);
      // Check if ccvNumber is within the range of 0 to 999
      if (MMorYYNumber >= 0 && MMorYYNumber <= 99) {
        return true;
      }
    }
    return false;
  }

  return (
    <form className="form">
      <div className="form__group">
        <label className="form__label" htmlFor="cardNumber">
          CARD NUMBER
        </label>
        <input
          className="form__input"
          placeholder="e.g. 1234 1234 1234 1234"
          type="text"
          id="cardNumber"
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>

      <div className="form__group">
        <label className="form__label" htmlFor="cardholderName">
          CARDHOLDER NAME
        </label>
        <input
          className="form__input"
          placeholder="e.g. Dennis Byberg"
          type="text"
          id="cardholderName"
          onChange={(e) => setCardholderName(e.target.value)}
        />
      </div>

      {/* VALID THRU & CCV CONTAINER */}
      <div className="form__group-valid-and-ccv">
        {/* VALID THRU */}
        <div className="form__group-valid">
          <label className="form__label" htmlFor="validThru">
            VALID THRU
          </label>
          <div className="form__valid-inputs-container">
            {/* MM */}
            <input
              className={`form__input ${
                isValidThruMMValid ? "form__input--success" : ""
              }`}
              placeholder="MM"
              type="text"
              maxLength={2}
              id="validThru"
              onChange={handleValidThruMM}
            />
            /{/* YY */}
            <input
              className={`form__input ${
                isValidThruYYValid ? "form__input--success" : ""
              }`}
              placeholder="YY"
              type="text"
              maxLength={2}
              id="validThru"
              onChange={handleValidThruYY}
            />
          </div>
        </div>

        {/* CCV */}
        <div className="form__group-ccv">
          <label className="form__label" htmlFor="ccv">
            CCV
          </label>
          <input
            className={`form__input ${
              isCcvValid ? "form__input--success" : ""
            }`}
            placeholder="e.g. 999"
            type="text"
            maxLength={3}
            id="ccv"
            onChange={handleCCV}
          />
        </div>
      </div>

      {/* VENDOR */}
      <div className="form__group">
        <label className="form__label" htmlFor="vendor">
          VENDOR
        </label>
        <select
          className={`form__select ${
            isVendorValid ? "form__select--success" : ""
          }`}
          id="vendor"
          onChange={handleVendor}
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

// sass
import "./CardForm.scss";

const Form = ({
  setCcv,
  setVendor,
  isCcvValid,
  setIsCcvValid,
  setIsVendorValid,
  isVendorValid,
  setValidThruMM,
  setValidThruYY,
  setIsValidThruMMValid,
  setIsValidThruYYValid,
  isValidThruYYValid,
  isValidThruMMValid,
  setFirstName,
  setLastName,
  isFirstNameValid,
  setIsFirstNameValid,
  isLastNameValid,
  setIsLastNameValid,
  setCardNumberSectionOne,
  setCardNumberSectionTwo,
  setCardNumberSectionThree,
  setCardNumberSectionFour,
  isCardNumberSectionOneValid,
  setIsCardNumberSectionOneValid,
  isCardNumberSectionTwoValid,
  setIsCardNumberSectionTwoValid,
  isCardNumberSectionThreeValid,
  setIsCardNumberSectionThreeValid,
  isCardNumberSectionFourValid,
  setIsCardNumberSectionFourValid,
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
  }

  function handleValidThruYY(e) {
    setIsValidThruYYValid(validateValidThru(e.target.value));
    setValidThruYY(e.target.value);
  }

  function handleFirstName(e) {
    setIsFirstNameValid(validateName(e.target.value));
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setIsLastNameValid(validateName(e.target.value));
    setLastName(e.target.value);
  }

  function handleCardNumberSectionOne(e) {
    setIsCardNumberSectionOneValid(validateCardNumber(e.target.value));
    setCardNumberSectionOne(e.target.value);
  }
  function handleCardNumberSectionTwo(e) {
    setIsCardNumberSectionTwoValid(validateCardNumber(e.target.value));
    setCardNumberSectionTwo(e.target.value);
  }
  function handleCardNumberSectionThree(e) {
    setIsCardNumberSectionThreeValid(validateCardNumber(e.target.value));
    setCardNumberSectionThree(e.target.value);
  }
  function handleCardNumberSectionFour(e) {
    setIsCardNumberSectionFourValid(validateCardNumber(e.target.value));
    setCardNumberSectionFour(e.target.value);
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
    // Check if ccv is a 2-digit number...
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

  function validateName(name) {
    // Check if the name is at least 3 characters long
    if (name.length < 3) {
      return false;
    }

    // Convert the name parameter to lowercase
    name = name.toLowerCase();
    // Define an array of valid characters, including Swedish letters A to Ö
    var validChars = "abcdefghijklmnopqrstuvwxyzåäö";
    // Loop through each character in the name parameter
    for (var i = 0; i < name.length; i++) {
      // If the character is not in the validChars array, return false
      if (validChars.indexOf(name.charAt(i)) === -1) {
        return false;
      }
    }
    // If all characters are valid and the name is at least 3 characters long, return true
    return true;
  }

  function validateCardNumber(cardNumber) {
    // Check if cardNumber is a 4-digit number...
    if (cardNumber.length === 4 && !isNaN(cardNumber)) {
      // Parse cardNumber to an integer
      const cardNumberInt = parseInt(cardNumber);
      // Check if cardNumber is within the range of 0 to 9999
      if (cardNumberInt >= 0 && cardNumberInt <= 9999) {
        return true;
      }
    }
    return false;
  }

  return (
    <form className="form">
      {/* CARD NUMBER */}
      <div className="form__group">
        <label className="form__label">CARD NUMBER</label>
        <div className="form__card-numbers-inputs-container">
          <input
            className={`form__input ${
              isCardNumberSectionOneValid ? "form__input--success" : ""
            }`}
            placeholder="1234"
            type="text"
            maxLength={4}
            onChange={handleCardNumberSectionOne}
          />
          <input
            className={`form__input ${
              isCardNumberSectionTwoValid ? "form__input--success" : ""
            }`}
            placeholder="1234"
            type="text"
            maxLength={4}
            onChange={handleCardNumberSectionTwo}
          />
          <input
            className={`form__input ${
              isCardNumberSectionThreeValid ? "form__input--success" : ""
            }`}
            placeholder="1234"
            type="text"
            maxLength={4}
            onChange={handleCardNumberSectionThree}
          />
          <input
            className={`form__input ${
              isCardNumberSectionFourValid ? "form__input--success" : ""
            }`}
            placeholder="1234"
            type="text"
            maxLength={4}
            onChange={handleCardNumberSectionFour}
          />
        </div>
      </div>

      {/* CARDHOLDER NAME */}
      <div className="form__group">
        <label className="form__label">CARDHOLDER NAME</label>
        <div className="form__cardholder-inputs-container">
          {/* FIRSTNAME */}
          <input
            className={`form__input ${
              isFirstNameValid ? "form__input--success" : ""
            }`}
            placeholder="FIRSTNAME"
            type="text"
            maxLength={11}
            onChange={handleFirstName}
          />
          {/* LASTNAME */}
          <input
            className={`form__input ${
              isLastNameValid ? "form__input--success" : ""
            }`}
            placeholder="LASTNAME"
            type="text"
            maxLength={11}
            onChange={handleLastName}
          />
        </div>
      </div>

      {/* VALID THRU & CCV CONTAINER */}
      <div className="form__group-valid-and-ccv">
        {/* VALID THRU */}
        <div className="form__group-valid">
          <label className="form__label">VALID THRU</label>
          <div className="form__valid-inputs-container">
            {/* MM */}
            <input
              className={`form__input ${
                isValidThruMMValid ? "form__input--success" : ""
              }`}
              placeholder="MM"
              type="text"
              maxLength={2}
              onChange={handleValidThruMM}
            />
            {/* YY */}
            <input
              className={`form__input ${
                isValidThruYYValid ? "form__input--success" : ""
              }`}
              placeholder="YY"
              type="text"
              maxLength={2}
              onChange={handleValidThruYY}
            />
          </div>
        </div>

        {/* CCV */}
        <div className="form__group-ccv">
          <label className="form__label">CCV</label>
          <input
            className={`form__input ${
              isCcvValid ? "form__input--success" : ""
            }`}
            placeholder="e.g. 999"
            type="text"
            maxLength={3}
            onChange={handleCCV}
          />
        </div>
      </div>

      {/* VENDOR */}
      <div className="form__group">
        <label className="form__label">VENDOR</label>
        <select
          className={`form__select ${
            isVendorValid ? "form__select--success" : ""
          }`}
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

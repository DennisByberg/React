// sass
import "./AddCard.scss";
// components
import Header from "../../components/Header/Header";
import NewCard from "../../components/NewCard/NewCard";
import CardForm from "../../components/CardForm/CardForm";
// react
import { useState } from "react";
// redux
import { useDispatch } from "react-redux";
import { addNewCardToCardStack } from "../../redux/cards";
// router
import { useNavigate } from "react-router-dom";

function AddCard() {
  const [ccv, setCcv] = useState();
  const [vendor, setVendor] = useState();
  const [validThruMM, setValidThruMM] = useState("");
  const [validThruYY, setValidThruYY] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumberSectionOne, setCardNumberSectionOne] = useState("");
  const [cardNumberSectionTwo, setCardNumberSectionTwo] = useState("");
  const [cardNumberSectionThree, setCardNumberSectionThree] = useState("");
  const [cardNumberSectionFour, setCardNumberSectionFour] = useState("");
  // checks
  const [isCcvValid, setIsCcvValid] = useState(false);
  const [isVendorValid, setIsVendorValid] = useState(false);
  const [isValidThruMMValid, setIsValidThruMMValid] = useState(false);
  const [isValidThruYYValid, setIsValidThruYYValid] = useState(false);
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isCardNumberSectionOneValid, setIsCardNumberSectionOneValid] =
    useState(false);
  const [isCardNumberSectionTwoValid, setIsCardNumberSectionTwoValid] =
    useState(false);
  const [isCardNumberSectionThreeValid, setIsCardNumberSectionThreeValid] =
    useState(false);
  const [isCardNumberSectionFourValid, setIsCardNumberSectionFourValid] =
    useState(false);

  const dispatch = useDispatch(); // redux.
  const navigate = useNavigate(); // router.

  // Denna funktion hanterar att lägga till ett nytt kort i kortstacken. Den kombinerar kortdetaljerna (kortnummer, kortinnehavarens namn, giltighetstid, CCV-kod och leverantör) till ett nytt kortobjekt, skickar en åtgärd för att lägga till det nya kortet i kortstacken och navigerar sedan till startsidan.
  function handleAddCard() {
    if (
      (isCardNumberSectionOneValid && isCardNumberSectionTwoValid,
      isCardNumberSectionThreeValid &&
        isCardNumberSectionFourValid &&
        isLastNameValid &&
        isFirstNameValid &&
        isValidThruYYValid &&
        isValidThruMMValid &&
        isVendorValid &&
        isCcvValid)
    ) {
      const combinedValidThru = `${validThruMM}/${validThruYY}`;
      const fullName = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
      const combinedCardNumber = `${cardNumberSectionOne} ${cardNumberSectionTwo} ${cardNumberSectionThree} ${cardNumberSectionFour}`;

      const newCard = {
        id: combinedCardNumber,
        cardNumber: combinedCardNumber,
        cardholderName: fullName,
        validThru: combinedValidThru,
        ccv: ccv,
        vendor: vendor,
      };

      dispatch(addNewCardToCardStack(newCard));
      navigate("/");
    }
  }

  const cardFormData = {
    setCcv,
    setVendor,
    setIsCcvValid,
    isCcvValid,
    setIsVendorValid,
    isVendorValid,
    setValidThruMM,
    setValidThruYY,
    isValidThruMMValid,
    setIsValidThruMMValid,
    isValidThruYYValid,
    setIsValidThruYYValid,
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
    isCardNumberSectionTwoValid,
    isCardNumberSectionThreeValid,
    isCardNumberSectionFourValid,
    setIsCardNumberSectionOneValid,
    setIsCardNumberSectionTwoValid,
    setIsCardNumberSectionThreeValid,
    setIsCardNumberSectionFourValid,
  };

  const newCardData = {
    cardNumberSectionOne,
    cardNumberSectionTwo,
    cardNumberSectionThree,
    cardNumberSectionFour,
    firstName,
    lastName,
    validThruMM,
    validThruYY,
    ccv,
    vendor,
  };

  return (
    <section className="add-card">
      <Header title={"ADD A NEW BANK CARD"} />
      <div>
        <p className="add-card__description">NEW CARD</p>
        <NewCard {...newCardData} />
      </div>
      <CardForm {...cardFormData} />
      <div className="add-card__buttons">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="add-card__go-back-button"
        >
          GO BACK
        </button>
        <button onClick={handleAddCard} className="add-card__add-card-button">
          ADD CARD
        </button>
      </div>
    </section>
  );
}

export default AddCard;

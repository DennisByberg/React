// sass
import "./AddCard.scss";
// components
import Header from "../../components/Header/Header";
import NewCard from "../../components/NewCard/NewCard";
import CardForm from "../../components/CardForm/CardForm";
// react
import { useState } from "react";
//redux
import { useDispatch } from "react-redux";
import { addNewCardToCardStack } from "../../redux/cards";
// router
import { useNavigate } from "react-router-dom";

function AddCard() {
  // react
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cardholderName, setCardholderName] = useState("FIRSTNAME LASTNAME");
  const [validThru, setValidThru] = useState("");
  const [ccv, setCcv] = useState();
  const [vendor, setVendor] = useState();

  const [validThruMM, setValidThruMM] = useState("MM");
  const [validThruYY, setValidThruYY] = useState("YY");

  // Checks
  const [isCcvValid, setIsCcvValid] = useState(false);
  const [isVendorValid, setIsVendorValid] = useState(false);
  const [isValidThruMMValid, setIsValidThruMMValid] = useState(false);
  const [isValidThruYYValid, setIsValidThruYYValid] = useState(false);

  // redux
  const dispatch = useDispatch();
  //router
  const navigate = useNavigate();

  function handleAddCard() {
    const newCard = {
      id: cardNumber,
      cardNumber: cardNumber,
      cardholderName: cardholderName,
      validThru: validThru,
      ccv: ccv,
      vendor: vendor,
    };
    // dispatch(addNewCardToCardStack(newCard));
    // navigate("/");
  }

  return (
    <section className="add-card">
      <Header title={"ADD A NEW BANK CARD"} />
      <div>
        <p className="add-card__description">ACTIVE CARD</p>
        <NewCard
          cardNumber={cardNumber}
          cardholderName={cardholderName}
          // validThru={validThru}
          validThruMM={validThruMM}
          validThruYY={validThruYY}
          ccv={ccv}
          vendor={vendor}
        />
      </div>
      <CardForm
        setCardNumber={setCardNumber}
        setCardholderName={setCardholderName}
        setValidThru={setValidThru}
        setCcv={setCcv}
        setVendor={setVendor}
        setIsCcvValid={setIsCcvValid}
        isCcvValid={isCcvValid}
        setIsVendorValid={setIsVendorValid}
        isVendorValid={isVendorValid}
        validThruMM={validThruMM}
        setValidThruMM={setValidThruMM}
        validThruYY={validThruYY}
        setValidThruYY={setValidThruYY}
        isValidThruMMValid={isValidThruMMValid}
        setIsValidThruMMValid={setIsValidThruMMValid}
        isValidThruYYValid={isValidThruYYValid}
        setIsValidThruYYValid={setIsValidThruYYValid}
      />
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

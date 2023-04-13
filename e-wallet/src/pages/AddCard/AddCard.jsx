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
  const [validThru, setValidThru] = useState("MM/YY");
  const [ccv, setCcv] = useState(821);
  const [vendor, setVendor] = useState();
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
    dispatch(addNewCardToCardStack(newCard));
    navigate("/");
  }

  return (
    <section className="add-card">
      <Header title={"ADD A NEW BANK CARD"} />
      <NewCard
        cardNumber={cardNumber}
        cardholderName={cardholderName}
        validThru={validThru}
        ccv={ccv}
        vendor={vendor}
      />
      <CardForm
        setCardNumber={setCardNumber}
        setCardholderName={setCardholderName}
        setValidThru={setValidThru}
        setCcv={setCcv}
        setVendor={setVendor}
      />
      <button onClick={handleAddCard} className="add-card__button">
        ADD CARD
      </button>
    </section>
  );
}

export default AddCard;

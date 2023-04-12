// sass
import "./AddCard.scss";
// components
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import CardForm from "../../components/CardForm/CardForm";

function AddCard() {
  return (
    <section className="add-card">
      <Header title={"ADD A NEW BANK CARD"} />
      <Card
        cardHolderName={"FIRSTNAME LASTNAME"}
        validThru={"MM/YY"}
        cartNumber={"XXXX XXXX XXXX XXXX"}
      />
      <CardForm />
    </section>
  );
}
export default AddCard;

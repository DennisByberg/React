// sass
import "./HomePage.scss";
// components
import Header from "../../components/Header/Header";
import CardStack from "../../components/CardStack/CardStack";
import Card from "../../components/Card/Card";
// react-router
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="homepage">
      <Header title={"E-WALLET"} />
      <Card cartNumber={"9999 9999 1234 9999"} cardholderName={"Olga Katt"} />
      <CardStack />
      <button
        onClick={() => {
          navigate("/AddCard");
        }}
        className="homepage__add-a-new-card-button"
      >
        ADD A NEW CARD
      </button>
    </section>
  );
}
export default HomePage;

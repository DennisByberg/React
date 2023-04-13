// sass
import "./HomePage.scss";
// components
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import CardStack from "../../components/CardStack/CardStack";
// react-router
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="homepage">
      <Header title={"E-WALLET"} />
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

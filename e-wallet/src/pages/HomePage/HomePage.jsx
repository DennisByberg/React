// sass
import "./HomePage.scss";
// components
import Header from "../../components/Header/Header";
import CardStack from "../../components/CardStack/CardStack";
import ActiveCard from "../../components/ActiveCard/ActiveCard";
// react-router
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate(); // router.

  return (
    <section className="homepage">
      <Header title={"E-WALLET"} />
      <div>
        <p className="homepage__description">ACTIVE CARD</p>
        <ActiveCard />
      </div>
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

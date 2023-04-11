// sass
import "./HomePage.scss";
// components
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import CardStack from "../../components/CardStack/CardStack";

function HomePage() {
  return (
    <section className="homepage">
      <Header title={"E-WALLET"} />
      {/* <Card /> */}
      <CardStack />
      <button className="homepage__add-a-new-card-button">
        ADD A NEW CARD
      </button>
    </section>
  );
}
export default HomePage;

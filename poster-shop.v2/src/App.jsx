//scss
import "./App.scss";
// components
import Header from "./components/Header/Header";
import PeopleList from "./components/PeopleList/PeopleList";
import SpecialPeopleList from "./components/SpecialPeopleList/SpecialPeopleList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <section className="App">
      <Header />
      <PeopleList />
      <SpecialPeopleList />
      <Footer />
    </section>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./pages/Homepage/HomePage";
import Rooms from "./pages/Rooms/Rooms";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
      <div className="App">
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Navigation isOpen={isOpen} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/rooms">
            <Rooms />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

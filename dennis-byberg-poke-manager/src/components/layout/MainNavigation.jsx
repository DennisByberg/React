import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Poké Manager</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/search">Search Pokemons</Link>
          </li>
          <li>
            <Link to="/team">My Team</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;

// Saknas enligt mig:

// Hade kunnat göra en drop-down box istället, men tyckte nästan det blev snyggare med en main navigation som ligger längst upp på appen hela tiden!

// Ville även lägga till så när man är inne på t.ex homepage ska den texten vara bold så att man ser vilken sida man är inne på!

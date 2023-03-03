import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = ({ isOpen }) => {
  return (
    <section className={`navigation ${isOpen ? "navigation--open" : ""}`}>
      <ul className="navigation__menu">
        <li className="navigation__item">
          <Link to="/" className="navigation__link button-text--medium">
            HOME
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/rooms" className="navigation__link button-text--medium">
            ROOMS
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Navigation;

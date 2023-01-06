import React from "react";
import HeaderCSS from "../Header/Header.module.css";

const Header = () => {
  return (
    <header>
      <h2 className={HeaderCSS.siteName}>Random Horses</h2>
    </header>
  );
};

export default Header;

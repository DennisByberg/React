import React from "react";
import classes from "./HomePageInfo.module.css";
import POKEMON from "../images/Pokemon.png";
import POKEBALL from "../images/pokeball2.png";
import PIKACHU from "../images/pikachu.png";

const HomePageInfo = () => {
  return (
    <div className={classes.homepageinfo}>
      <img className={classes.pokemonimage} src={POKEMON} alt="Pokemon-Text" />
      <section className={classes.section}>
        <h1 className={classes.maintext}>1st Gen POKE MANAGER</h1>
        <img className={classes.pikachu} src={PIKACHU} alt="" />
      </section>
      <img
        className={classes.pokeballimage}
        src={POKEBALL}
        alt="Spinning-Pokeball"
      />
      <h3 className={classes.signature}>Dennis Byberg</h3>
    </div>
  );
};

export default HomePageInfo;

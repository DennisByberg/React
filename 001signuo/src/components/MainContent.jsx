import React from "react";
import { useState, useEffect } from "react";
import MainContentCSS from "../components/MainContent.module.css";

const MainContent = () => {
  let date = new Date();
  const [seconds, setSeconds] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      updateSeconds();
      updateMinutes();
      updateHours();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Update Hours...
  const updateHours = () => {
    date = new Date();
    const updateHours =
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    setHours(updateHours);
  };

  // Update Minutes...
  const updateMinutes = () => {
    date = new Date();
    const updateMinutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    setMinutes(updateMinutes);
  };

  // Update Seconds...
  const updateSeconds = () => {
    date = new Date();
    const updateSeconds =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    setSeconds(updateSeconds);
  };

  const clock = `${hours}:${minutes}:${seconds}`;

  return (
    <main>
      <p className={MainContentCSS.clock}>{clock}</p>
    </main>
  );
};

export default MainContent;

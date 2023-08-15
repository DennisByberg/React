import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string>("");

  // This is a function that gives you the latitude and longitude.
  function getPosition() {
    console.log("getPosition 1");
    if ("geolocation" in navigator) {
      console.log("getPosition 2");

      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          console.log("position is: ", position);
          // set message to longtidu & latitude.
          setMessage(
            `Your postion is: lat.${position.coords.latitude} long.${position.coords.longitude}`
          );
        },
        (error) => {
          console.log(error);
          setMessage("Please enable postion to use this app");
        }
      );
      console.log("getPosition 3");
    }
  }

  return (
    <div className="vertical-layout">
      <header>
        <h1> Geolocation </h1>
      </header>
      <main>
        <button onClick={getPosition}> See Location </button>
        <p> {message} </p>
      </main>
    </div>
  );
}

export default App;

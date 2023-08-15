import "./App.css";
import { getPosition, reverseGeocode } from "./geolocations";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  // 57.7008516 long.11.955171
  const lat = 57.7008516;
  const lon = 11.955171;

  return (
    <div className="vertical-layout">
      <header>
        <h1> Geolocation </h1>
      </header>
      <main>
        <button onClick={() => getPosition(setMessage)}> Hitta! </button>
        <p> {message} </p>

        <button onClick={() => reverseGeocode(lat, lon, setAddress)}>
          {" "}
          Get Address from location
        </button>
        <p>{address}</p>
      </main>
    </div>
  );
}

export default App;

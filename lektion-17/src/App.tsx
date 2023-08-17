import { useState } from "react";
import "./App.css";

interface Data {
  stopLocationOrCoordLocation: StopLocation[];
}

interface StopLocation {
  StopLocation: {
    dist: number; // distance from (lat,lon) in meters.
    extId: string;
    name: string;
  };
}

function App() {
  // console.log(import.meta.env.VITE_API_KEY);

  // Innan vi fetchar är result null...
  // Sedan implementerar det Data-interfacet...
  const [result, setResult] = useState<Data | null>(null);

  const handleClick = async () => {
    const lat = 57.708895;
    const lon = 11.973479;
    const URL = `https://api.resrobot.se/v2.1/location.nearbystops?originCoordLat=${lat}&originCoordLong=${lon}&format=json&accessId=${
      import.meta.env.VITE_API_KEY
    }`;
    const response = await fetch(URL);
    const data: Data = await response.json();

    console.log(data);

    setResult(data);
  };

  let stops: null | StopLocation[] = null;
  if (result) {
    stops = result.stopLocationOrCoordLocation;
  }

  return (
    <section className="App">
      <header> Demo </header>
      <main>
        <button onClick={handleClick}> Hämta information från ResRobot </button>
        {stops ? (
          <ul>
            {stops.map((stop) => (
              <li key={stop.StopLocation.extId}>
                {stop.StopLocation.name} ({stop.StopLocation.dist} meter)
              </li>
            ))}
          </ul>
        ) : (
          <p>Här kommer hållplatser att visas...</p>
        )}
      </main>
    </section>
  );
}

export default App;

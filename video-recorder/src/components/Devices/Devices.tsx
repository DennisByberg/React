import { useState } from "react";
import "./Devices.scss";

function Devices({ toggleDevices }: IDevicesProps): JSX.Element {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>();

  // Kollar om browsern supportar mediaDevices.enumerateDevices
  const handleShowDevices = async () => {
    if (!navigator.mediaDevices.enumerateDevices) {
      // Ställ in ett felmeddelande för webbläsare som inte stöds
      setErrorMessage("Please upgrade your web browser to use this feature.");
      return; // Stoppa funktion!
    }
    // En liten toggle för hide & show devices
    if (devices.length) {
      setDevices([]);
      return; // Stoppa funktionen!
    }
    // Hämta information om anslutna mediainenheter (kamera och mikrofon)
    const ds: MediaDeviceInfo[] =
      await navigator.mediaDevices.enumerateDevices();
    // Uppdatera tillståndet med den hämtade enhetsinformationen
    setDevices(ds);
  };
  return (
    <section className="devices">
      <button onClick={handleShowDevices}>
        {!devices.length ? "Show Devices" : "Hide Devices"}
      </button>
      <div className="devices__container">
        <ul>
          {devices.map((d) => (
            <li>
              <p>{d.label}</p>
            </li>
          ))}
        </ul>
        <p> {errorMessage} </p>
      </div>
      <button onClick={toggleDevices}>Go Back</button>
    </section>
  );
}

export default Devices;

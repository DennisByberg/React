import "./Pixel.css";
import { useState } from "react";

const Pixel = ({ pixelColor }) => {
  const [color, setColor] = useState("#000");
  const [oldColor, setOldColor] = useState(color);
  const [canChangeColor, setCanChangeColor] = useState(true);

  function useColor() {
    setColor(pixelColor); // sätt aktuell pixel färg till den valda färgen
    setCanChangeColor(false); // förhindra möjligheten sedan att ändra färgen ev. tillbaka
  }

  // Funktion för att byta färg när muspekaren svävar över pixlarna
  function changeColorOnHover() {
    setOldColor(color); // sparar den tidigare färgen
    setColor(pixelColor); // sätter den nya färgen till pixelColor
  }

  // Funktionen återställer färgen på pixlarna till föregående färg eller en tidigare sparad färg
  function resetColor() {
    // Om vi har möjlighet att ändra färgen, dvs canChangeColor är sant,
    // sätter vi tillbaka den sparade färgen som var lagrad i oldColor
    if (canChangeColor) {
      setColor(oldColor);
    }

    // Ställer in att användaren kan ändra färg igen.
    setCanChangeColor(true);
  }

  return (
    <section
      onClick={useColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      className="pixel"
      style={{ backgroundColor: color }}
    ></section>
  );
};

export default Pixel;

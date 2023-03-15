import "./Editor.css";
import { useState } from "react";
import { TwitterPicker } from "react-color";
import DrawingPanel from "../DrawingPanel/DrawingPanel";

const Editor = () => {
  const [panelWidth, setPanelWidth] = useState(12); // panelbredd
  const [panelHeight, setPanelHeight] = useState(12); // panelhöjd
  const [hideChoices, setHideChoices] = useState(false); // om vi ska gömma val
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true); // om vi ska gömma mål-panelen
  const [buttonText, setButtonText] = useState("Börja Rita"); // knapp-text
  const [pixelColor, setPixelColor] = useState("#fff"); // färg på pensel #fff = första färgen när vi trycker på börja rita

  // A function to toggle between showing and hiding a set of choices and a drawing panel
  function startDrawing() {
    setHideChoices(!hideChoices);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "Börja Rita"
      ? setButtonText("Starta Om")
      : setButtonText("Börja Rita");
  }

  // Funktion för att välja en pixel-färg genom att ta in en färg som parameter
  function selectPixelColor(color) {
    setPixelColor(color.hex);
  }

  return (
    <section className="editor">
      <h1>
        <span className="D">D</span>
        <span className="B">B </span>Pixel Editor
      </h1>
      {hideDrawingPanel && (
        <h2>
          Ange Dimensioner <span className="max-text">~ max 20x20</span>
        </h2>
      )}
      {hideDrawingPanel && (
        <div className="editor__choices">
          <div className="editor__choice">
            <span>Höjd</span>
            <input
              className="editor__panel-input"
              type="number"
              defaultValue={panelHeight}
              max={20}
              onChange={(e) => {
                if (e.target.value > 20) {
                  setPanelHeight(20);
                } else {
                  setPanelHeight(e.target.value);
                }
              }}
            />
          </div>
          <div className="editor__choice">
            <span>Bredd:</span>
            <input
              className="editor__panel-input"
              type="number"
              defaultValue={panelWidth}
              max={20}
              onChange={(e) => {
                if (e.target.value > 20) {
                  setPanelWidth(20);
                } else {
                  setPanelWidth(e.target.value);
                }
              }}
            />
          </div>
        </div>
      )}

      <button onClick={startDrawing} className="editor__button">
        {buttonText}
      </button>

      {hideChoices && (
        <TwitterPicker
          className="twitter-picker"
          color={pixelColor}
          onChangeComplete={selectPixelColor}
        />
      )}

      {hideChoices && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          pixelColor={pixelColor}
        />
      )}
    </section>
  );
};

export default Editor;

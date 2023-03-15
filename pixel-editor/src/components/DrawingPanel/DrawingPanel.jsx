import "./DrawingPanel.css";
import Row from "../Row/Row";

const DrawingPanel = ({ width, height, pixelColor }) => {
  let rows = [];

  // For-loop som skapar lika många rader som den höjd som är specificerad
  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} pixelColor={pixelColor} />);
  }

  return (
    <section className="drawing-panel">
      <div className="pixels">{rows}</div>
    </section>
  );
};

export default DrawingPanel;

import "./Row.css";
import Pixel from "../Pixel/Pixel";

const Row = ({ width, pixelColor }) => {
  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} pixelColor={pixelColor} />);
  }

  return <section className="row">{pixels}</section>;
};

export default Row;

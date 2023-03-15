import "./DisplayImages.css";
import Image from "../Image/Image";

const DisplayImages = ({ pictures }) => {
  const picturesComponent = pictures.map((picture) => {
    return (
      <Image
        key={picture.id}
        id={picture.id}
        farm={picture.farm}
        server={picture.server}
        secret={picture.secret}
      />
    );
  });

  return (
    <section>
      <ul className="display-images__ul">{picturesComponent}</ul>
    </section>
  );
};

export default DisplayImages;

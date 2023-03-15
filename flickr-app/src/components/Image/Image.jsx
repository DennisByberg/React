import "./Image.css";

const Image = ({ id, farm, server, secret }) => {
  const pictureURL = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
  console.log(pictureURL);

  return (
    <li className="image">
      <img src={pictureURL} />
    </li>
  );
};

export default Image;

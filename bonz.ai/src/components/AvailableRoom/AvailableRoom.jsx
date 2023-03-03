// react
import { useState, useEffect } from "react";
// scss
import "./AvailableRoom.scss";
import "../../scss/typography.scss";
import "../../scss/layout/grid.scss";
// photos
import hotelRoomPhotoNight5 from "../../assets/photos/05-night.jpg";
import hotelRoomPhotoDay5 from "../../assets/photos/05-day.jpg";

const AvailableRoom = ({ name, description, price, toilets, beds }) => {
  // icons
  const bedIcon = "https://cdn-icons-png.flaticon.com/512/333/333451.png";
  const toiletIcon = "https://cdn-icons-png.flaticon.com/512/677/677558.png";
  const wifiIcon = "https://cdn-icons-png.flaticon.com/512/159/159076.png";

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = [
    {
      id: 1,
      src: hotelRoomPhotoNight5,
    },
    {
      id: 2,
      src: hotelRoomPhotoDay5,
    },
  ];

  const handleSlideClick = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <section className="available-room grid">
      <div className="available-room__picture-container">
        <p className="available-room__price body-text--small">
          {price}$ / Night
        </p>
        <img
          className="available-room__picture"
          src={slides[currentSlideIndex].src}
        />
        <div className="available-room__toggle-buttons">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={currentSlideIndex === index ? "active" : ""}
              onClick={() => handleSlideClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="available-room__info-container">
        <div className="available-room__bed-info">
          <img className="available-room__icon" src={bedIcon} />
          <p className="body-text--xs">
            {beds} {beds != 1 ? "Beds" : "Bed"}
          </p>
        </div>
        <div className="available-room__toilet-info">
          <img className="available-room__icon" src={toiletIcon} />
          <p className="body-text--xs">
            {toilets} {toilets != 1 ? "Toilets" : "Toilet"}
          </p>
        </div>
        <div className="available-room__wifi-info">
          <img className="available-room__icon" src={wifiIcon} />
          <p className="body-text--xs">Free 6G</p>
        </div>
        <button className="available-room__book-room-button button-text--medium">
          BOOK ROOM
        </button>
      </div>
      <p className="available-room__room-name heading--medium">{name}</p>
      <p className="available-room__room-description body-text--s">
        {description}
      </p>
    </section>
  );
};

export default AvailableRoom;

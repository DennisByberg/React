import { Link } from "react-router-dom";
import hotelRoomPhotoNight5 from "../../assets/photos/05-night.jpg";
import hotelRoomPhotoNight8 from "../../assets/photos/08-night.jpg";
import "./HomePageHero.scss";
import "../../scss/typography.scss";
import "../../scss/layout/grid.scss";

const HomePageHero = () => {
  return (
    <section className="homepage-hero grid">
      <div className="homepage-hero__first-section">
        <img className="homepage-hero__picture" src={hotelRoomPhotoNight5} />
        <Link className="homepage-hero__link button-text--large" to="/rooms">
          Available Rooms
        </Link>
      </div>
      <div className="homepage-hero__second-section">
        <img className="homepage-hero__picture" src={hotelRoomPhotoNight8} />
      </div>
    </section>
  );
};

export default HomePageHero;

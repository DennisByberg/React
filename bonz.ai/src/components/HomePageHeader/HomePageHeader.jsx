import "../../scss/typography.scss";
import "../../scss/layout/grid.scss";
import "./HomePageHeader.scss";

const HomePageHeader = () => {
  return (
    <section className="homepage-header grid">
      <h1 className="homepage-header__title heading--xl">BONZ.AI</h1>
      <h2 className="homepage-header__subheading heading--medium">
        Experience the beauty of the earth at Bonz.ai
      </h2>
    </section>
  );
};

export default HomePageHeader;

import "./SpecialPeopleCard.scss";

const SpecialPeopleCard = ({ title, description, image }) => {
  return (
    <section className="special-person-card">
      <img className="special-person-card__image" src={image} />
      <p className="special-person-card__title">{title}</p>
      <p className="special-person-card__description">{description}</p>
      <button className="special-person-card__button">
        Oh, take my money!
      </button>
    </section>
  );
};

export default SpecialPeopleCard;

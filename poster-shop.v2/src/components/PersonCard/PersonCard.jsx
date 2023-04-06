import "./PersonCard.scss";

function PersonCard({ title, description, image }) {
  return (
    <section className="person-card">
      <img className="person-card__image" src={image} />
      <p className="person-card__title">{title}</p>
      <p className="person-card__description">{description}</p>
      <button className="person-card__button">Oh, take my money!</button>
    </section>
  );
}

export default PersonCard;

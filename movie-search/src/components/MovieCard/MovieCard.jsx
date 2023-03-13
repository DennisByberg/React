import "./MovieCard.css";

const MovieCard = ({ title, imdbID, year, poster }) => {
  return (
    <section className="movie-card">
      <li className="movie-card__list-item" key={imdbID}>
        <div>
          <img className="movie-card__poster" src={poster} />
        </div>
        <div className="movie-card__info-section">
          <p className="movie-card__title">{title}</p>
          <p>{year}</p>
        </div>
      </li>
    </section>
  );
};

export default MovieCard;

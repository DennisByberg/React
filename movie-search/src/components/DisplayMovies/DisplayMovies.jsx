import "./DisplayMovies.css";
import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";

const DisplayMovies = ({ userSearch }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (userSearch.Response === "True") {
      setMovies(userSearch.Search);
      setError("");
    } else {
      setError("No movies found...");
    }
  }, [userSearch]);

  const moviesComponent = movies.map((movie) => {
    return (
      <MovieCard
        key={movie.imdbID}
        title={movie.Title}
        poster={movie.Poster}
        year={movie.Year}
      />
    );
  });

  return (
    <section className="display-movies">
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul>{moviesComponent}</ul>
      )}
    </section>
  );
};

export default DisplayMovies;

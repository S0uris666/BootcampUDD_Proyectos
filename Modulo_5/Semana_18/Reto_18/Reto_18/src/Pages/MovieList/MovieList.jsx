import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

const fetchMovies = async () => {
  try {
    const response = await fetch("https://www.omdbapi.com/?s=star&apikey=f7207940");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.Response === "True") {
      setMovies(data.Search); // ✅ esto sí es un array
    } else {
      setError(data.Error || "No se encontraron resultados");
    }
  } catch (err) {
    setError(err.message);
  }
};

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Catálogo de peliculas</h1>
      {error && <p className="error-message"> Error: {error}</p>}
      {!error && movies.length === 0 && <p>Cargando peliculas...</p>}
      <div className="product-grid">
        {movies &&
          movies.map((movie) => (
            <Link
              to={`/peliculas/${movie.imdbID}`}
              key={movie.imdbID}
              className="product-card"
              state={{ movie }}
            >
              <div className="product-card">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="product-image"
                />
                <h2 className="product-title">{movie.Title}</h2>
                <p className="product-price">{movie.Year}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default MovieList;
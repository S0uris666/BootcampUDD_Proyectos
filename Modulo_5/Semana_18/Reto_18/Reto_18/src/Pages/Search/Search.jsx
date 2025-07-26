import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");          // Texto del input
  const [results, setResults] = useState([]);      // Lista de películas buscadas
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;  // No buscar si input vacío
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=f7207940`);
      const data = await response.json();
      if (data.Response === "True") {
        setResults(data.Search);
      } else {
        setResults([]);
        setError(data.Error || "No se encontraron resultados");
      }
    } catch (err) {
      setError("Error en la búsqueda");
      setResults([]);
    }
    setLoading(false);
  };

  return (
    <div className="search-container">
      <h1>Búsqueda de películas</h1>
      <input
        type="text"
        placeholder="Escribe el título de una película"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      {loading && <p>Cargando...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="search-results">
        {results.length > 0 && results.map(movie => (
          <Link
            key={movie.imdbID}
            to={`/peliculas/${movie.imdbID}`}
            state={{ movie }}
            className="movie-card"
          >
            <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"} alt={movie.Title} />
            <p>{movie.Title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleMovie = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Aquí recibes el movie que pasaste en MovieList
  const movie = location.state?.movie;

  // Estado para detalles completos
  const [details, setDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!movie) {
      navigate("/"); // Si no hay película, vuelve al home
      return;
    }

    // Fetch para detalles completos por imdbID
    const fetchDetails = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=f7207940`
        );
        const data = await res.json();
        if (data.Response === "True") {
          setDetails(data);
        } else {
          setError(data.Error || "No se encontraron detalles");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDetails();
  }, [movie, navigate]);

  if (error) return <p>Error: {error}</p>;

  if (!details) return <p>Cargando detalles...</p>;

  return (
    <div className="single-product-container">
      <div className="single-product-card">
        <img
          src={details.Poster}
          alt={details.Title}
          className="single-product-image"
        />
        <div className="single-product-info">
          <h1 className="single-product-title">{details.Title}</h1>
          <p className="single-product-category">Categoría: {details.Genre}</p>
          <p className="single-product-description">{details.Plot}</p>
          <p className="single-product-year">Año: {details.Year}</p>
          <p className="single-product-rating">
            Rating: {details.imdbRating} / 10
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
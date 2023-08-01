import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const params = useParams();
  const movieId = parseInt(params.movieId);

  // Check if movies is an object, and convert it to an array of movie objects
  const moviesArray = Array.isArray(movies) ? movies : Object.values(movies);

  // Find the movie object in the `moviesArray` based on the `movieId`
  const movie = moviesArray.find((movie) => movie.id === movieId);

  // Check if the movie is found
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      {/* Render other movie details as needed */}
    </div>
  );
}

export default MovieShow;

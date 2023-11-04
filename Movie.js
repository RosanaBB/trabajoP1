// src/components/Movie.js
import React from 'react';

const Movie = ({ movie }) => {
  const {
    poster,
    title,
    releaseDate,
    duration,
    maturity,
    genres,
    rating,
    metascore,
    director,
    mainActors,
    plot,
  } = movie;

  // Lógica para determinar el color del metascore
  let metascoreColor = '';
  if (metascore >= 60) {
    metascoreColor = 'green';
  } else if (metascore >= 50) {
    metascoreColor = 'yellow';
  } else {
    metascoreColor = 'red';
  }

  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <h2>{title}</h2>
      <p>Release Date: {releaseDate}</p>
      <p>Duration: {duration}</p>
      <p>Maturity: {maturity}</p>
      <p>Genres: {genres.join(', ')}</p>
      <p>Rating: {rating}</p>
      <p style={{ color: metascoreColor }}>Metascore: {metascore}</p>
      <p>Director: {director}</p>
      <p>Main Actors: {mainActors.join(', ')}</p>
      <p>Plot: {plot}</p>
    </div>
  );
};

export default Movie;

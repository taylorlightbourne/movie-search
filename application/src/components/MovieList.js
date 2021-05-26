import React from 'react';
import "../App.css";


const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
      <div className="movie">
		<div className="movie-poster">
			<img src={movie.Poster} alt="Poster" />
		</div>
		<div className="movie-info">
			<h1>{movie.Title}</h1>
			<p>{movie.Year}</p>
		</div>
	</div>
			))}
		</>
	);
};

export default MovieList;


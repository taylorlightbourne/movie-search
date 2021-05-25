import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
      <article className="movie">
	  <section className="movie-poster">
		  <img src={movie.Poster} alt="Poster" />
	  </section>
	  <section className="movie-content">
		<h1>{movie.Title}</h1>
		<p>{movie.Year}</p>
	  </section>
	</article>
			))}
		</>
	);
};

export default MovieList;


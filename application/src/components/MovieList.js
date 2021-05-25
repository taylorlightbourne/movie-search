import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='movieDiv'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => (movie)}

					>
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;


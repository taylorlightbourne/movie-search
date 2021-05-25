import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';


const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
    
		const FEATURED_API = `http://www.omdbapi.com/?s=${searchValue}&apikey=2215d555`;

		const response = await fetch(FEATURED_API);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);



	return (
		<div className='MainDiv'>
			<div className='MoviesDiv'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
				/>
			</div>
		</div>
	);
};

export default App;

// import MovieContainer from './components/MovieContainer';
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <MovieContainer />
//     </div>
//   );
// }

// export default App;
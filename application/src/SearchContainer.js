import React, { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import MovieList from './components/MovieList';
import "./App.css";

const SearchContainer = () => {
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
		<div>
			<div>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className="MovieCards">
				<MovieList
					movies={movies}
				/>
			</div>
		</div>
	);
};

export default SearchContainer;

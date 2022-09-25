import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import useMovieService from 'services/MovieService';

const Movies = () => {
	const location = useLocation();
	const [moviesArray, setMoviesArray] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const searchText = searchParams.get('query');

	const { searchFilmByName } = useMovieService();

	const onSearchFilm = name => {
		searchFilmByName(name).then(res => setMoviesArray(res));
	};

	const changeQuery = e => {
		setSearchParams(e.target.value !== '' ? { query: e.target.value } : {});
	};

	useEffect(() => {
		if (searchText) {
			onSearchFilm(searchText);
		}
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<input onChange={e => changeQuery(e)} type="text" />
			<button onClick={() => onSearchFilm(searchText)}>search</button>
			<ul>
				{moviesArray.map(item => {
					return (
						<li key={item.id}>
							<Link to={`${item.id}`} state={{ from: location }}>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Movies;

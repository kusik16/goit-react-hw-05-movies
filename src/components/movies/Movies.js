import { useState, useEffect } from 'react';
import {
	Link,
	useNavigate,
	createSearchParams,
	useLocation,
} from 'react-router-dom';

import useMovieService from 'services/MovieService';

const Movies = () => {
	const [searchText, setSearchText] = useState('');
	const [moviesArray, setMoviesArray] = useState([]);

	const { searchFilmByName } = useMovieService();

	const navigate = useNavigate();
	const params = { query: searchText };

	const { search } = useLocation();

	const onSearchFilm = name => {
		searchFilmByName(name).then(res => setMoviesArray(res));
	};

	useEffect(() => {
		if (search) {
			onSearchFilm(search.split('=')[1]);
		}
		// eslint-disable-next-line
	}, [search]);

	const goToSearch = () =>
		navigate({
			pathname: '/goit-react-hw-05-movies/movies',
			search: `?${createSearchParams(params)}`,
		});

	return (
		<>
			<input onChange={e => setSearchText(e.target.value)} type="text" />
			<button onClick={goToSearch}>search</button>
			<ul>
				{moviesArray.map(item => {
					return (
						<li key={item.id}>
							<Link to={`${item.id}`}>{item.title}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Movies;

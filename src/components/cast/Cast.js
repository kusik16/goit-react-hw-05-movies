import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useMovieService from 'services/MovieService';

import castCSS from './Cast.module.css';

const Cast = () => {
	const [movieCast, setMovieCast] = useState(null);

	const { getMovieCredits } = useMovieService();

	const { movieId } = useParams();

	useEffect(() => {
		getMovieCredits(movieId).then(res => {
			setMovieCast(res);
		});
		// eslint-disable-next-line
	}, []);

		console.log('render cast');
	return (
		<ul>
			{movieCast &&
				movieCast.map(cast => {
					return (
						<li className={castCSS.item} key={cast.id}>
							<img
								className={castCSS.image}
								src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
								alt="cast_image"
							/>
							<div>{cast.name}</div>
							<div>Character: {cast.character}</div>
						</li>
					);
				})}
		</ul>
	);
};

export default Cast;

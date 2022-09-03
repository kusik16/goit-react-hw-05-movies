import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useMovieService from 'services/MovieService';

import './cast.css';

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

	return (
		<ul>
			{movieCast
				? movieCast.map(cast => {
						return (
							<li className="cats-list__item" key={cast.id}>
								<img
									className="cats-list__item-image"
									src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
									alt="cast_image"
								/>
								<div>{cast.name}</div>
								<div>Character: {cast.character}</div>
							</li>
						);
				  })
				: null}
		</ul>
	);
};

export default Cast;

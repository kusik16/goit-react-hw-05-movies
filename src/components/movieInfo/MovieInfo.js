import { useState, useEffect, lazy } from 'react';
import { Link, useParams, Route, Routes, useNavigate } from 'react-router-dom';

import useMovieService from 'services/MovieService';

import './movieInfo.css';

const Cast = lazy(() => import('../cast/Cast'));
const Reviews = lazy(() => import('../reviews/Reviews'));

const MovieInfo = () => {
	const [movieInfo, setMovieInfo] = useState(null);

	const { getMovieDetails } = useMovieService();

	const { movieId } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		getMovieDetails(movieId).then(res => {
			setMovieInfo(res);
		});
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{movieInfo ? (
				<div>
					<button onClick={() => navigate(-1)}>go back</button>
					<div className="movie-info__container">
						<img
							className="movie-info__image"
							src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`}
							alt="poster"
						/>
						<div className="movie-info__info">
							<h1>{movieInfo.title}</h1>
							<div>
								User score: {Math.floor(movieInfo.popularity)}%
							</div>
							<h2>Overview</h2>
							<p>{movieInfo.overview}</p>
							<h3>Genres</h3>
							<ul className="movie-info__genres-list">
								{movieInfo.genres.map(genre => {
									return (
										<li
											className="movie-info__genres-list__item"
											key={genre.id}
										>
											{genre.name}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="movie-info__additional">
						<div>Additional information</div>
						<ul>
							<li>
								<Link to="cast">Cast</Link>
							</li>
							<li>
								<Link to="reviews">Reviews</Link>
							</li>
						</ul>
					</div>
					<Routes>
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
					</Routes>
				</div>
			) : null}
		</>
	);
};

export default MovieInfo;

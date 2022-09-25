import { useState, useEffect, Suspense } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import useMovieService from 'services/MovieService';
import movieInfoCSS from './MovieInfo.module.css';
import Spinner from '../../spinner/Spinner';

const MovieInfo = () => {
	const [movieInfo, setMovieInfo] = useState(null);

	const { getMovieDetails } = useMovieService();

	const { movieId } = useParams();

	const location = useLocation();

	useEffect(() => {
		getMovieDetails(movieId).then(res => {
			setMovieInfo(res);
		});
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{movieInfo && (
				<div>
					<Link
						to={
							location.state?.from ??
							'/goit-react-hw-05-movies/movies'
						}
					>
						go back
					</Link>
					<div className={movieInfoCSS.container}>
						<img
							className={movieInfoCSS.image}
							src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`}
							alt="poster"
						/>
						<div className={movieInfoCSS.info}>
							<h1>{movieInfo.title}</h1>
							<div>
								User score: {Math.floor(movieInfo.popularity)}%
							</div>
							<h2>Overview</h2>
							<p>{movieInfo.overview}</p>
							<h3>Genres</h3>
							<ul className={movieInfoCSS.genresList}>
								{movieInfo.genres.map(genre => {
									return (
										<li
											className={movieInfoCSS.genresItem}
											key={genre.id}
										>
											{genre.name}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className={movieInfoCSS.additional}>
						<div>Additional information</div>
						<ul>
							<li>
								<Link
									to="cast"
									state={{
										from: location.state?.from ?? '/movies',
									}}
								>
									Cast
								</Link>
							</li>
							<li>
								<Link
									to="reviews"
									state={{
										from: location.state?.from ?? '/movies',
									}}
								>
									Reviews
								</Link>
							</li>
						</ul>
					</div>
					<Suspense fallback={<Spinner />}>
						<Outlet />
					</Suspense>
				</div>
			)}
		</>
	);
};

export default MovieInfo;

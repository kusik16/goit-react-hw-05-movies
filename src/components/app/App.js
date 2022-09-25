import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';

const Trending = lazy(() => import('../pages/trending/Trending'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MovieInfo = lazy(() => import('../pages/movieInfo/MovieInfo'));
const Cast = lazy(() => import('../pages/cast/Cast'));
const Reviews = lazy(() => import('../pages/reviews/Reviews'));

const App = () => {
	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Suspense fallback={<Spinner />}>
						<Routes basename="/goit-react-hw-05-movies/">
							<Route path="/*" element={<Trending />} />
							<Route path="movies" element={<Movies />} />
							<Route
								path="movies/:movieId"
								element={<MovieInfo />}
							>
								<Route path="cast" element={<Cast />} />
								<Route path="reviews" element={<Reviews />} />
							</Route>
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
	);
};

export default App;

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';

const Trending = lazy(() => import('../trending/Trending'));
const Movies = lazy(() => import('../movies/Movies'));
const MovieInfo = lazy(() => import('../movieInfo/MovieInfo'));

const App = () => {
	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path="/goit-react-hw-05-movies/*" element={<Trending />} />
							<Route path="/goit-react-hw-05-movies/movies" element={<Movies />}></Route>
							<Route
								path="/goit-react-hw-05-movies/movies/:movieId/*"
								element={<MovieInfo />}
							></Route>
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
	);
};

export default App;

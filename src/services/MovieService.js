import { useHttp } from '../hooks/http.hook';

const useMovieService = () => {
	const { request, clearError, process, setProcess } = useHttp();

	const _apiBase = 'https://api.themoviedb.org/3/';
	const _apiKey = 'api_key=a01a0779b6da55b3cb3231f967e502fc';

	const getTrandingToday = async () => {
		const res = await request(`${_apiBase}trending/movie/day?${_apiKey}`);
		console.log(res);
		return res.results.map(_transformFilms);
	};

	const searchFilmByName = async name => {
		const res = await request(
			`${_apiBase}search/movie?${_apiKey}&query=${name}`
		);
		return res.results.map(_transformFilms);
	};

	const getMovieDetails = async movieId => {
		const res = await request(`${_apiBase}movie/${movieId}?${_apiKey}`);
		return res;
	};

	const getMovieCredits = async movieId => {
		const res = await request(
			`${_apiBase}movie/${movieId}/credits?${_apiKey}`
		);
		return res.cast.map(_transformCast);
	};

	const getMovieReviews = async movieId => {
		const res = await request(
			`${_apiBase}movie/${movieId}/reviews?${_apiKey}`
		);
		console.log(res);
		return res.results.map(_transformReviews);
	};

	const _transformFilms = film => {
		return {
			id: film.id,
			title: film.title,
		};
	};

	const _transformCast = cast => {
		return {
			id: cast.id,
			profile_path: cast.profile_path,
			name: cast.name,
			character: cast.character,
		};
	};

	const _transformReviews = review => {
		return {
			id: review.id,
			author: review.author,
			content: review.content,
		};
	};

	return {
		clearError,
		process,
		setProcess,
		getTrandingToday,
		searchFilmByName,
		getMovieDetails,
		getMovieCredits,
		getMovieReviews,
	};
};

export default useMovieService;

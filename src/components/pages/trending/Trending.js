import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import useMovieService from 'services/MovieService';

import trending from './Trending.module.css';

const Trending = () => {
	const [trendingList, setTrendingList] = useState([]);
	const location = useLocation();
	const { getTrandingToday, setProcess } = useMovieService();

	useEffect(() => {
		getTrandingToday()
			.then(res => setTrendingList(res))
			.then(() => setProcess('confirmed'));
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<h1 className={trending.title}>Trending today</h1>
			<ul>
				{trendingList.map(item => {
					return (
						<li className={trending.item} key={item.id}>
							<Link
								to={`movies/${item.id}`}
								state={{ from: location }}
							>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Trending;

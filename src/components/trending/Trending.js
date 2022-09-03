import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMovieService from 'services/MovieService';

import './trending.css';

const Trending = () => {
	const [trendingList, setTrendingList] = useState([]);

	const { getTrandingToday, setProcess } = useMovieService();

	useEffect(() => {
		getTrandingToday()
			.then(res => setTrendingList(res))
			.then(() => setProcess('confirmed'));
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<h1 className='trending__title' >Trending today</h1>
			<ul>
				{trendingList.map(item => {
					return (
						<li className='trending__list-item' key={item.id}>
							<Link to={`movies/${item.id}`}>{item.title}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Trending;

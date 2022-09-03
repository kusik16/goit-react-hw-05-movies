import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useMovieService from 'services/MovieService';

import './reviews.css';

const Reviews = () => {
	const [movieReviews, setMovieReviews] = useState(null);

	const { getMovieReviews } = useMovieService();

	const { movieId } = useParams();

	useEffect(() => {
		getMovieReviews(movieId).then(res => {
			setMovieReviews(res);
		});
	}, []);

	return (
		<ul>
			{movieReviews && movieReviews.length > 0 ? (
				movieReviews.map(Reviews => {
					return (
						<li key={Reviews.id}>
							<div className='reviews__author'>Author: {Reviews.author}</div>
							<p>{Reviews.content}</p>
						</li>
					);
				})
			) : (
				<div>We don't have any reviews for this movie.</div>
			)}
		</ul>
	);
};

export default Reviews;

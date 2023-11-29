import {useCallback, useState} from 'react';
import {Rating} from '../../../../shared/ui/rating/Rating';

export const RatePost = () => {
	const [rating, setRating] = useState(0);

	const handleLike = useCallback(() => {
		setRating((v) => v + 1);
	}, []);

	const handleDislike = useCallback(() => {
		setRating((v) => v - 1);
	}, []);

	return (
		<Rating rating={rating} onLike={handleLike} onDislike={handleDislike} />
	);
};

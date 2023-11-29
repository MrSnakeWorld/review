import {memo} from 'react';
import './Rating.css';

interface IRatingProps {
	onLike: () => void;
	onDislike: () => void;
	rating: number;
}

export const Rating = memo(({rating, onLike, onDislike}: IRatingProps) => (
	<div className="rating">
		<div onClick={onDislike} className="rating__dislike">-</div>
		<div className="rating__number">{rating}</div>
		<div onClick={onLike} className="rating__like">+</div>
	</div>
));

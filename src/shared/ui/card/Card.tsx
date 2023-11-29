import {ReactNode} from 'react';
import './Card.css';

interface ICardProps {
	children: ReactNode;
}

export const Card = ({children}: ICardProps) => (
	<div className='card'>{children}</div>
);

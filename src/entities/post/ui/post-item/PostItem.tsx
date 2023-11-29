import {ReactNode, memo} from 'react';
import './PostItem.css';

export interface IPostItemProps {
	title: string;
	body: string;
	postUserComponent?: ReactNode;
	postRateComponent?: ReactNode;
}

export const PostItem = memo(
	({postUserComponent, postRateComponent, title, body}: IPostItemProps) => (
		<div className='post-item'>
			<div className='post-item__header'>
				<div className="post-item__header-title">
					<h2 className='post-item__header-title__text'>{title}</h2>
					{postUserComponent && (
						<div className='post-item__header-title__user'>
							Пост пользователя: {postUserComponent}
						</div>
					)}
				</div>
				{postRateComponent && (
					<div className='post-item__header-rate'>{postRateComponent}</div>
				)}
			</div>

			<p className='post-item__body'>{body}</p>
		</div>
	)
);

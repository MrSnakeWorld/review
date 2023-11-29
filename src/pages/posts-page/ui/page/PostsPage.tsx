import {memo} from 'react';
import './PostsPage.css';
import {PostsContainer} from '@widgets/posts/ui';

export const PostsPage = memo(() => (
	<div className='posts-page'>
		<h1 className='posts-page__title'>Страница постов</h1>
		<PostsContainer />
	</div>
));

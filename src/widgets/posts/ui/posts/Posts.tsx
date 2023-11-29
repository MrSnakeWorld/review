import {memo} from 'react';
import {usePosts} from '@entities/post';
import {Post} from '../post/Post';
import './Posts.css';

export const Posts = memo(() => {
	const {data: posts} = usePosts();

	return (
		<div className='posts'>
			{posts.map((post) => (
				<Post key={post.id} {...post} />
			))}
		</div>
	);
});

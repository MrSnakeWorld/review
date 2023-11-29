import {Suspense, memo} from 'react';
import {Posts} from '../posts/Posts';
import {Loading} from '@shared/ui';

export const PostsContainer = memo(() => (
	<Suspense fallback={<Loading text="Посты загружаются..." />}>
		<Posts />
	</Suspense>
));

import {memo, Suspense} from 'react';
import {useComments} from '@entities/comment/api/query/hooks';

const CommentItem = memo(({comment}: {comment: IComment}) => (
	<div className='comment-item'>
		<p className='email' style={{color: '#3a4a5d', fontSize: '14px'}}>{comment.email}</p>
		<p className='body'>{comment.body}</p>
	</div>
));

type IComment = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

export const CommentItems = memo(({postId}: {postId: number}) => {
	let {data: comments} = useComments(postId);
	let comments1 = comments as IComment[];

	return (
		<div className='comment-items' style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
			<Suspense fallback={<div>Комментарии загружаются...</div>}>
				{comments1.map((c, i) => (
					<CommentItem
						key={i}
						comment={c}
					/>
				))}
			</Suspense>
		</div>
	);
});

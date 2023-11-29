import {memo, useMemo} from 'react';
import {RatePost} from '@features/rate-post';
import {UsernameContainer} from '@entities/user';
import { PostItem } from '@entities/post';
import { Card, HidingContainer } from '@shared/ui';
import { CommentItems } from '@widgets/comments/ui/comment-items/CommentsItems';

interface IPostProps {
	id: number;
	userId: number;
	title: string;
	body: string;
}

const postRateComponent = <RatePost />;

export const Post = memo(({id, userId, title, body}: IPostProps) => {
	const postUserComponent = useMemo(
		() => <UsernameContainer userId={userId} />,
		[userId]
	);

	const props = {
		hiddenTitle: "Показать комментарии",
		shownTitle: 'Скрыть комментарии'
	}

	return (
		<Card>
			<PostItem
				postUserComponent={postUserComponent}
				postRateComponent={postRateComponent}
				body={body}
				title={title}
			/>
			<HidingContainer {...props}>
				<CommentItems postId={id} />
			</HidingContainer>
		</Card>
	);
});

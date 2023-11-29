import {PostItem} from '@entities/post';
import {UsernameContainer} from '@entities/user';
import {RatePost} from '@features/rate-post';
import {Card} from '@shared/ui';
import {memo, useMemo} from 'react';

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

	return (
		<Card>
			<PostItem
				postUserComponent={postUserComponent}
				postRateComponent={postRateComponent}
				body={body}
				title={title}
			/>
		</Card>
	);
});

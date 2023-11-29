import {useSuspenseQuery} from '@tanstack/react-query';
import {IPost} from '../interfaces';

export type IPostsResponse = IPost[];

export const usePosts = <T = IPostsResponse>(
	select?: (data: IPostsResponse) => T
) =>
	useSuspenseQuery<IPostsResponse, Error, T>({
		queryKey: ['posts'],
		queryFn: async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts'
			);
			return response.json();
		},
		select
	});

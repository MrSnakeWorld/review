import {useQuery} from '@tanstack/react-query';

export const useComments = (
	postId: number
) =>
	useQuery({
		queryKey: ['comments'],
		queryFn: async () => (await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)).json()
	});

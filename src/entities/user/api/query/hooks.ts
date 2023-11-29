import {useSuspenseQuery} from '@tanstack/react-query';
import {useCallback} from 'react';
import {IUser} from '../interfaces';
import {extractUserById} from './selectors';

export type IUsersResponse = IUser[];

const useUsers = <T = IUsersResponse>(select?: (data: IUsersResponse) => T) =>
	useSuspenseQuery<IUsersResponse, Error, T>({
		queryKey: ['users'],
		queryFn: async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			return response.json();
		},
		select
	});

export const useUsersArray = () => useUsers();

export const useUserById = (id: number) => {
	const select = useCallback(
		(data: IUsersResponse) => extractUserById(data, id),
		[id]
	);

	return useUsers(select);
};

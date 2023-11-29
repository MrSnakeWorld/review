import {IUsersResponse} from './hooks';

export const extractUserById = (data: IUsersResponse, id: number) =>
	data.find((item) => item.id === id);

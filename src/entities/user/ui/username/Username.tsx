import {useUserById} from '../../api/query/hooks';

export interface IUsernameProps {
	userId: number;
}

export const Username = ({userId}: IUsernameProps) => {
	const {data: user} = useUserById(userId);

	return <b>{user?.username}</b>;
};

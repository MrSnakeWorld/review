import {memo} from 'react';

interface ILoadingProps {
	text: string;
}

export const Loading = memo(({text}: ILoadingProps) => <div>{text}</div>);

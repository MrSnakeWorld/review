import {ReactNode, memo, useCallback, useState} from 'react';
import './HidingContainer.css';

interface IHidingContainer {
	children: ReactNode;
	hiddenTitle: string;
	shownTitle: string;
}

export const HidingContainer = memo(({
	children,
	hiddenTitle,
	shownTitle
}: IHidingContainer) => {
	const [isHidden, setHidden] = useState(true);

	const handleClick = useCallback(() => setHidden(!isHidden), []);

	return isHidden ? (
		<div className='hiding-container hidden' key="hidden">
			<a onClick={handleClick}>{hiddenTitle}</a>
		</div>
	) : (
		<div className='hiding-container shown' key="shown">
			<a onClick={handleClick}>{shownTitle}</a>
			<div className='hiding-container children'>{children}</div>
		</div>
	);
});

import {Suspense, memo} from 'react';
import {IUsernameProps, Username} from '../username/Username';
import {Loading} from '@shared/ui/loading/Loading';

export const UsernameContainer = memo((props: IUsernameProps) => (
	<Suspense fallback={<Loading text="Пользователь загружается..." />}>
		<Username {...props} />
	</Suspense>
));

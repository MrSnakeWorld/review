import {PostsPage} from '@pages/posts-page';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './colors.css';
import './font-sizes.css';
import './index.css';

const queryClient = new QueryClient();

const App = () => (
	<div>
		<QueryClientProvider client={queryClient}>
			<PostsPage />
		</QueryClientProvider>
	</div>
);

export default App;

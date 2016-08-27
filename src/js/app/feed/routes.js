import 'css/containers/feed';

import {Route, IndexRoute} from 'react-router';
import PageLayout from 'common/containers/pageLayout';
import Dashboard from './containers/dashboard';
import reducers from './reducers';

const routes = (
	<Route path="feed" component={PageLayout} reducers={reducers}>
		<IndexRoute component={Dashboard} />
	</Route>
);

export default routes;

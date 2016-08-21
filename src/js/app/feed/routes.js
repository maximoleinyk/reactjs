import PageLayout from 'common/containers/pageLayout';
import Feed from './containers/feed';

export default {
	path: 'feed',
	component: PageLayout,
	indexRoute: {
		component: Feed
	}
};

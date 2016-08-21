import PageLayout from 'common/containers/pageLayout';
import ProfileSettings from './containers/profile';

export default {
	path: 'settings',
	component: PageLayout,
	indexRoute:  {
		component: ProfileSettings
	}
};

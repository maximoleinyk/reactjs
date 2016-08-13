import Layout from './layout';
import ProfileSettings from './containers/profile';

export default {
	path: 'settings',
	component: Layout,
	childRoutes: [
		{
			path: 'profile',
			component: ProfileSettings
		}
	]
}

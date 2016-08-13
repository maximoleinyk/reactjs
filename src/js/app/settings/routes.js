import Layout from './layout';
import ProfileSettings from './containers/profile';

export default {
	path: '/page/settings',
	component: Layout,
	childRoutes: [
		{
			path: 'profile',
			component: ProfileSettings
		}
	]
}

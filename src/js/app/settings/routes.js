import 'css/containers/profile';

import Component from 'common/component';
import Link from 'common/components/link';
import ProfileSettings from './containers/profile';

class Layout extends Component {
	render() {
		return (
			<div className='page-content settings-layout'>
				<nav>
		    	<ul>
						<li>
							<Link to='/page/settings/profile'>Settings</Link>
						</li>
					</ul>
		    </nav>
				<div className='component-wrapper'>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default {
	path: 'settings',
	component: Layout,
	childRoutes: [
		{
			path: 'profile',
			component: ProfileSettings
		}
	]
};

import Component from 'common/component';
import Link from 'common/components/link';

export default class SettingsDashboard extends Component {
	render() {
		return (
			<div className='page-content settings-layout'>
				<nav>
		    	<ul>
						<li>
							<Link to='/page/settings/profile'>Profile settings</Link>
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

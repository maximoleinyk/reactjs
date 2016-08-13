import React from 'react';
import AppLink from 'common/components/link';

export default class SettingsDashboard extends React.Component {
	render() {
		return (
			<div className='page-content settings-layout'>
				<nav>
		    	<ul>
						<li>
							<AppLink to='/page/settings/profile'>Profile settings</AppLink>
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

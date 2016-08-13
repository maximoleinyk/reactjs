import React from 'react';
import Link from 'common/components/link';

export default class Dashboard extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<Link to='/page/account'>Account</Link>
				</li>
				<li>
					<Link to='/page/settings'>Settings</Link>
				</li>
			</ul>
		);
	}
}

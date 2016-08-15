import 'css/main.sass';

import Component from 'common/component';
import Link from 'common/components/link';

export default class Dashboard extends Component {
	render() {
		return (
			<div>
   			<h2>Dashboard</h2>
				<ul>
					<li>
						<Link to='/page/account'>Account</Link>
					</li>
					<li>
						<Link to='/page/settings'>Profile</Link>
					</li>
				</ul>
			</div>
		);
	}
}

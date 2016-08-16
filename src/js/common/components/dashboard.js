import Component from 'common/component';
import Link from 'common/components/link';

export default class Dashboard extends Component {
	render() {
		return (
			<div>
   			<h2>Dashboard</h2>
				<i className="fa fa-bicycle fa-6" aria-hidden="true"></i>
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

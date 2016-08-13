import Component from 'common/component';
import Link from 'common/components/link';

export default class AccountDashboard extends Component {
	render() {
		return (
			<div className='page-content account-layout'>
				<header>
		    	<h1>Account page layout</h1>
		    </header>
				<nav>
		    	<ul>
						<li>
							<Link to='/page'>Back home</Link>
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

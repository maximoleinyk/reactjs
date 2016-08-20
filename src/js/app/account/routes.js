import 'css/containers/account';

import {Route, IndexRoute} from 'react-router';
import Component from 'common/component';
import Link from 'common/components/link';

class Layout extends Component {
	render() {
		return (
			<div className='account'>
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

export default {
	path: 'account',
	component: Layout
}

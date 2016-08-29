import 'css/containers/account';

import {PropTypes} from 'react';
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

Layout.propTypes = {
	children: PropTypes.element.isRequired
}

export default (store) => {
  store.replaceReducer((state = {}) => {
    return state;
  });

	return {
    path: 'account',
    component: Layout,
    store: store
  };
}

import {PropTypes} from 'react';
import Component from 'common/component';
import {Link} from 'react-router';

class NavLink extends Component {
	render() {
		return (
			<Link {...this.props} activeClassName="active">
				{this.props.children}
			</Link>
		);
	}
}

NavLink.propTypes = {
	children: PropTypes.any.isRequired
};

export default NavLink;

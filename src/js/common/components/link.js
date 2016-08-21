import Component from 'common/component';
import {Link} from 'react-router';

export default class NavLink extends Component {
	render() {
		return <Link {...this.props} className="nav-item nav-link" activeClassName="active">{this.props.children}</Link>;
	}
}

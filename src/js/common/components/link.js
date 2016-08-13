import Component from 'common/component';
import {IndexLink} from 'react-router';

export default class AppLink extends Component {
	render() {
		return <IndexLink {...this.props} activeClassName='selected'/>;
	}
}

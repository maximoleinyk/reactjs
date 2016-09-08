import {PropTypes} from 'react';
import Component from 'common/component';

class AppLayout extends Component {
	render() {
		return (
			<main class='app'>
				{this.props.children}
			</main>
		);
	}
}

AppLayout.propTypes = {
	children: PropTypes.element.isRequired
}

export default AppLayout;

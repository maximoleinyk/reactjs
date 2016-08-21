import 'css/main';

import Component from 'common/component';

class AppLayout extends Component {
	getChildContext() {
		return {
			param: 'something'
		};
	}
	render() {
		return (
			<main className='app'>{this.props.children}</main>
		);
	}
}

AppLayout.childContextTypes = {
	param: React.PropTypes.string
}

export default AppLayout;

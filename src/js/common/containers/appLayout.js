import 'css/main';

import Component from 'common/component';

class AppLayout extends Component {
	getChildContext() {
		return {
		};
	}
	render() {
		return (
			<main className='app'>{this.props.children}</main>
		);
	}
}

AppLayout.childContextTypes = {
}

export default AppLayout;

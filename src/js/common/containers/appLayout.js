import 'css/main';

import Component from 'common/component';

class PageLayout extends Component {
	render() {
		return (
			<main className='app'>{this.props.children}</main>
		);
	}
}

export default PageLayout;

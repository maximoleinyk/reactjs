import { PropTypes } from 'react';
import Component from 'common/component';
import Navigation from 'common/components/navigation';

class PageLayout extends Component {
	constructor(props, context) {
		super(props, context);

		this.store = props.route.store;
	}

	getChildContext() {
		return {
			store: this.store
		};
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row app-navbar">
					<div className="col-12">
						<Navigation />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

PageLayout.propTypes = {
	route: PropTypes.object.isRequired,
	children: PropTypes.element.isRequired
};

PageLayout.childContextTypes = {
  store: PropTypes.shape({
		subscribe: PropTypes.func.isRequired,
		dispatch: PropTypes.func.isRequired,
		getState: PropTypes.func.isRequired
	}).isRequired
};

export default PageLayout;

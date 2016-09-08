import { PropTypes } from 'react';
import { Component } from 'common';
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
			<div class="container-fluid">
				<div class="row app-navbar">
					<div class="col-12">
						<Navigation />
					</div>
				</div>
				<div class="row">
					<div class="col-12">
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

import Component from 'common/component';
import {Link} from 'common/components';
import {PropTypes} from 'react';

class Navigation extends Component {
	constructor(props, context) {
		super();

		this.state = {
			counter: context.store.getState().feedItems.length
		};
	}
	componentDidMount() {
		const store = this.context.store;

		store.subscribe(() => {
			this.setState({
				counter: store.getState().feedItems.length
			});
		});
	}
	render() {
		let counterBadge = this.state.counter ? <span className="counter-badge">{this.state.counter}</span> : '';

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<nav className="navbar navbar-dark">
							<div className="nav navbar-nav">
								<Link to="/page/feed" className="nav-link nav-item">
									<span>Feed</span> {counterBadge}
								</Link>
							</div>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}

Navigation.contextTypes = {
	store: PropTypes.object.isRequired
};

export default Navigation;

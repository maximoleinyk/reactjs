import {connect} from 'react-redux';
import Component from 'common/component';
import FeedItem from './item';
import {create} from './actions';

class FeedList extends Component {
	constructor(props) {
		super();

		this.state = {
			items: props.store.getState()
		};
	}
	componentDidMount() {
		this.props.store.subscribe(() => {
			this.setState({
				items: this.props.store.getState()
			});
		});
	}
	render() {
		if (this.state.items.length) {
			return (
				<div>
					{
						this.state.items.map((item) => {
							return <FeedItem key={item.id} data={item} />;
						})
					}
				</div>
			);
		}

		return (
			<div className="col-xs-12 text-sm-center">No items</div>
		);
	}
}

export default FeedList;

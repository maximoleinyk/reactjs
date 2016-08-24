import {connect} from 'react-redux';
import Component from 'common/component';
import FeedItem from './item';
import {create} from './actions';

class FeedList extends Component {
	render() {
		let items = this.props.items || [];

		if (items.length) {
			return (
				<div>
					{
						items.map((item) => {
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

let mapStateToProps = (state) => {
	return {
		items: state.feedItems
	};
};

export default connect(mapStateToProps)(FeedList);

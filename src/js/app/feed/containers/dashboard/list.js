import {PropTypes} from 'react';
import {connect} from 'react-redux';
import Component from 'common/component';
import FeedItem from './item';

class FeedList extends Component {
	render() {
		let items = this.props.items || [];

		if (items.length) {
			return (
				<div>
					{
						items.map((item) => {
							return <FeedItem key={item.id} item={item} />;
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

FeedList.propTypes = {
	items: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(FeedList);

/* global $ */
import {PropTypes} from 'react';
import {connect} from 'react-redux';
import Component from 'common/component';
import FeedItem from './item';
import {requestItems, feedItemsReceived} from './actions';

class FeedList extends Component {
  render() {
    let {items, isFetching} = this.props.data;

    if (isFetching) {
      return <div className="text-sm-center">Loading...</div>
    }

    if (!items.length) {
      return <div className=" text-sm-center">No items</div>;
    }

    return (
      <div>
      {items.map((item, i) => {
        return <FeedItem key={i} item={item} />;
      })}
      </div>
    );
  }

  componentDidMount() {
    this.props.requestItems();
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.feedItems
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    requestItems: () => {
      dispatch(requestItems());
      $.get('/api/feed')
        .then((response) => {
          dispatch(feedItemsReceived(response));
        });
    }
  };
};

FeedList.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  }).isRequired,
  requestItems: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);

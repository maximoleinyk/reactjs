/* global $ */
import {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Component from 'common/component';
import FeedItem from './item';
import {requestFeed, feedReceived, remove, update} from './actions';

class FeedList extends Component {
  render() {
    let {items, isFetching} = this.props.data;

    if (isFetching) {
      return <div className="text-sm-center">Loading...</div>
    }

    if (!items.length) {
      return <div className=" text-sm-center">No items</div>;
    }

    let actions = bindActionCreators({ remove, update }, this.props.dispatch);

    return (
      <div>
        {
          items.map((item, i) => {
            return <FeedItem key={i} item={item} {...actions}/>;
          })
        }
      </div>
    );
  }

  componentDidMount() {
    this.props.requestFeed();
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.feed
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    requestFeed: () => {
      dispatch(requestFeed());
      $.get('/api/feed')
        .then((response) => {
          dispatch(feedReceived(response));
        });
    },
    dispatch
  };
};

FeedList.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  }).isRequired,
  requestFeed: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);

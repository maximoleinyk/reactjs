/* global */
import {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Component from 'common/component';
import FeedItem from './item';
import {requestFeed, remove, update} from './actions';

class FeedList extends Component {
  componentDidMount() {
    this.props.dispatch(requestFeed());
  }

  render() {
    let {items, isFetching} = this.props.data;

    if (isFetching) {
      return <div class="text-sm-center">Loading...</div>
    }

    if (!items.length) {
      return <div class=" text-sm-center">No items</div>;
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
}

FeedList.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  }).isRequired,

  dispatch: PropTypes.func.isRequired
};

export default connect(state => {return { data: state.feed }; })(FeedList);

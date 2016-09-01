import {connect} from 'react-redux';
import {PropTypes} from 'react';

let FeedNavLink = (props) => {
  let {counter} = props;
  let badge = <span className="counter-badge">{counter}</span>
  let node = counter ? badge : '';

  return (
    <div>
       {props.children} <span className="badge">{node}</span>
    </div>
  );
};

FeedNavLink.propTypes = {
  counter: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired
};

export default connect((state) => {
  return {
    counter: state.feedItems && state.feedItems.items.length || 0
  };
})(FeedNavLink);

/* global fetch */
import * as Constants from 'app/feed/constants';

let ID_COUNTER = 0;

let create = (text) => {
	return {
		type: Constants.ADD_FEED_ITEM,
    id: ID_COUNTER++,
		text
	};
};

let remove = (id) => {
	return {
		type: Constants.REMOVE_FEED_ITEM,
		id
	};
};

let update = (data) => {
	return {
		type: Constants.UPDATE_FEED_ITEM,
		...data
	};
};

let requestFeed = () => {
  return (dispatch) => {
    dispatch({
      type: Constants.REQUEST_FEED
    });

    return fetch('/api/feed')
      .then(response => response.json())
      .then((response) => {
        dispatch(feedReceived(response));
      })
      .catch((response) => {
        dispatch(feedFailed(response));
      });
  };
};

let feedReceived = (response) => {
  ID_COUNTER = response.data.length + 1;

  return {
    type: Constants.REQUEST_FEED_SUCCESS,
    response
  };
};

let feedFailed = (response) => {
	return {
		type: Constants.REQUEST_FEED_ERROR,
		response
	};
};

export {create, remove, update, requestFeed, feedFailed, feedReceived};

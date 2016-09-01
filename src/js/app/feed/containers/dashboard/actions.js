import * as Constants from 'app/feed/constants';

let ID = 0;

let create = (text) => {
	return {
		type: Constants.ADD_FEED_ITEM,
    id: ID++,
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
  return {
    type: Constants.REQUEST_FEED
  };
};

let feedReceived = (response) => {
  counter = response.length + 1;

  return {
    type: Constants.REQUEST_FEED_SUCCESS,
    response
  };
};

export {create, remove, update, requestFeed, feedReceived};

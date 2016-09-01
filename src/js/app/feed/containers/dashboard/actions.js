import * as Constants from 'app/feed/constants';

let counter = 0;

let create = (text) => {
	return {
		type: Constants.ADD_FEED_ITEM,
    id: counter++,
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

let requestItems = () => {
  return {
    type: Constants.REQUEST_ITEMS
  };
};

let feedItemsReceived = (response) => {
  counter = response.length + 1;

  return {
    type: Constants.REQUEST_ITEMS_SUCCESS,
    response
  };
};

export {create, remove, update, requestItems, feedItemsReceived};

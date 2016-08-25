import {ADD_FEED_ITEM, REMOVE_FEED_ITEM, UPDATE_FEED_ITEM} from 'app/feed/constants';

let create = (text) => {
	return {
		type: ADD_FEED_ITEM,
		text
	};
};

let remove = (id) => {
	return {
		type: REMOVE_FEED_ITEM,
		id
	};
};

let update = (data) => {
	return {
		type: UPDATE_FEED_ITEM,
		...data
	};
};

export {create, remove, update};

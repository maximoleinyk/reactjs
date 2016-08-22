import {ADD_FEED_ITEM} from './constants';

let feedItem = (state = {}, payload) => {
	switch (payload.type) {
		case ADD_FEED_ITEM:
			return Object.assign({
				id: (new Date()).getTime()
			}, payload);
		default:
			return state;
	}
};

let feedItems = (state = [], payload) => {
	switch (payload.type) {
		case ADD_FEED_ITEM:
			return [
				feedItem(undefined, payload),
				...state
			];
		default:
			return state;
	}
};

export {feedItems};

import {ADD_FEED_ITEM, REMOVE_FEED_ITEM, UPDATE_FEED_ITEM} from 'app/feed/constants';
import feedItem from './feedItem';

let feedItems = (state = [], payload) => {
	switch (payload.type) {
		case ADD_FEED_ITEM:
			return [
				feedItem(undefined, payload),
				...state
			];
		case REMOVE_FEED_ITEM:
			return state.filter((item) => {
				return item.id !== payload.id;
			});
		case UPDATE_FEED_ITEM:
			let newArray = state.map((item) => {
				return item.id === payload.id ? feedItem(item, payload) : item;
			});

			return newArray;
		default:
			return state;
	}
};

export default feedItems;

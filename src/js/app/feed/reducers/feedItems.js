import * as Constants from 'app/feed/constants';
import feedItem from './feedItem';

let feedItems = (state = [], payload) => {
	switch (payload.type) {
		case Constants.ADD_FEED_ITEM:
			return [
				feedItem(undefined, payload),
				...state
			];
		case Constants.REMOVE_FEED_ITEM:
			return state.filter((item) => {
				return item.id !== payload.id;
			});
		case Constants.UPDATE_FEED_ITEM:
			return state.map((item) => {
				return item.id === payload.id ? feedItem(item, payload) : item;
			});
		default:
			return state;
	}
};

export default feedItems;

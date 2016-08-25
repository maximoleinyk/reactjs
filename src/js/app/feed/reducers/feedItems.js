import {ADD_FEED_ITEM} from 'app/feed/constants';
import feedItem from './feedItem';

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

export default feedItems;

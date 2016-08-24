import {ADD_FEED_ITEM} from 'app/feed/constants';

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


export default feedItem;

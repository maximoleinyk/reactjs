import * as Constants from 'app/feed/constants';

let feedItems = (state = [], payload) => {
	switch (payload.type) {
		case Constants.ADD_FEED_ITEM:
			return [
        {...payload},
				...state
			];
		case Constants.REMOVE_FEED_ITEM:
			return state.filter((item) => {
				return item.id !== payload.id;
			});
		case Constants.UPDATE_FEED_ITEM:
			return state.map((item) => {
				return item.id === payload.id ? {...payload} : item;
			});
		default:
			return state;
	}
};

export default feedItems;

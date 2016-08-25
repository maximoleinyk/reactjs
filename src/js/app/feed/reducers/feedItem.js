import {ADD_FEED_ITEM, UPDATE_FEED_ITEM} from 'app/feed/constants';

let feedItem = (state = {}, payload) => {
	const {type, ...rest} = payload;

	switch (type) {
		case ADD_FEED_ITEM:
			return {
				...rest,
				id: (new Date()).getTime()
			};
		case UPDATE_FEED_ITEM:
			return {...rest};
		default:
			return state;
	}
};


export default feedItem;

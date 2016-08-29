import * as Constants from 'app/feed/constants';

export default (state = {}, payload) => {
	const {type, ...rest} = payload;

	switch (type) {
		case Constants.ADD_FEED_ITEM:
			return {
				...rest,
				id: (new Date()).getTime()
			};
		case Constants.UPDATE_FEED_ITEM:
			return {...rest};
		default:
			return state;
	}
};

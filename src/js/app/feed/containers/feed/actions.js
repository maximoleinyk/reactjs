import {ADD_FEED_ITEM} from './constants';

let create = (text) => {
	return {
		type: ADD_FEED_ITEM,
		text
	};
};

export {create};

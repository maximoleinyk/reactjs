import * as Constants from 'app/feed/constants';

let feedItems = (state = {
  items: [],
  isFetching: false
}, payload) => {
	switch (payload.type) {
    case Constants.REQUEST_FEED:
      return {
        ...state,
        isFetching: true
      };
    case Constants.REQUEST_FEED_SUCCESS:
      return {
        ...state,
        items: [
          ...payload.response.data
        ],
        isFetching: false
      };
		case Constants.ADD_FEED_ITEM:
			return {
        ...state,
        items: [
          {...payload},
          ...state.items
        ]
			};
		case Constants.REMOVE_FEED_ITEM:
			return {
        ...state,
        items: state.items.filter((item) => {
          return item.id !== payload.id;
        })
      };
		case Constants.UPDATE_FEED_ITEM:
			return {
        ...state,
        items: state.items.map((item) => {
          return item.id === payload.id ? {...payload} : item;
        })
      };
		default:
			return state;
	}
};

export default feedItems;

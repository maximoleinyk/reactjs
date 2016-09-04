import * as Constants from 'app/feed/constants';
import {createReducer} from 'common/utils';

export default createReducer({
  items: [],
  isFetching: false
}, {
  // Request methods
  [Constants.REQUEST_FEED](state) {
    return {
      ...state,
      isFetching: true
    }
  },
  [Constants.REQUEST_FEED_SUCCESS](state, payload) {
    return {
      ...state,
      items: [
        ...payload.response.data
      ],
      isFetching: false
    };
  },

  // Create methods
  [Constants.CREATE_FEED_ITEM_SUCCESS](state, payload) {
    return {
      ...state,
      items: [
        {...payload.response},
        ...state.items
      ]
    };
  },

  // Update methods
  [Constants.UPDATE_FEED_ITEM](state, payload) {
    return {
      ...state,
      items: state.items.map((item) => {
        return item.id === payload.data.id ? {...payload.data} : item;
      })
    };
  },

  // Delete methods
  [Constants.DELETE_FEED_ITEM](state, payload) {
    return {
      ...state,
      items: state.items.filter((item) => {
        return item.id !== payload.data.id;
      })
    };
  }
});

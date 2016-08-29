/* global window */
import {combineReducers, createStore} from 'redux';

export default (reducers) => {
  let devTools = window.devToolsExtension && window.devToolsExtension();
  let store = createStore(combineReducers(reducers), devTools);

  return store;
}

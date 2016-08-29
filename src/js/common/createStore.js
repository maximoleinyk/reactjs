/* global window */
import {combineReducers, createStore} from 'redux';

let replaceReducer = (store, createReducer) => {
  let newReducers = createReducer(store.reducers);

  store.reducers = {
    ...store.reducers,
    ...newReducers
  };
  
  store.replaceReducer(combineReducers(store.reducers));
};

export {replaceReducer};

export default () => {
  let devTools = window.devToolsExtension && window.devToolsExtension();
  let store = createStore(() => {}, devTools);

  store.reducers = {};

  return store;
}

import {Route, IndexRoute} from 'react-router';
import {combineReducers} from 'redux';
import PageLayout from 'common/containers/pageLayout';
import Dashboard from './containers/dashboard';
import reducers from './reducers';

export default (store) => {
  store.replaceReducer(combineReducers(reducers));

  let route = (
    <Route path="settings" component={PageLayout} store={store}>
      <IndexRoute component={Dashboard} />
    </Route>
  );

  return route;
}

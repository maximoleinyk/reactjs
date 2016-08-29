import {Route, IndexRoute} from 'react-router';
import PageLayout from 'common/containers/pageLayout';
import Dashboard from './containers/dashboard';
import {replaceReducer} from 'common/createStore';
import reducer from './reducers';

/* eslint react/display-name: 0 */
export default (store) => {
  replaceReducer(store, reducer);

  return <Route path="settings" component={PageLayout} store={store}>
    <IndexRoute component={Dashboard} />
  </Route>
}

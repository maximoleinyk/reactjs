import {Route, IndexRoute} from 'react-router';
import PageLayout from 'common/containers/pageLayout';
import Dashboard from './containers/dashboard';
import reducers from './reducers';
import createStore from 'common/createStore';

const store = createStore(reducers);

export default (
  <Route path="settings" component={PageLayout} store={store}>
    <IndexRoute component={Dashboard} />
  </Route>
);

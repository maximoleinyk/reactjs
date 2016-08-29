import 'css/containers/feed';

import {Route, IndexRoute} from 'react-router';
import PageLayout from 'common/containers/pageLayout';
import createStore from 'common/createStore';
import Dashboard from './containers/dashboard';
import reducers from './reducers';

const store = createStore(reducers);

export default (
  <Route path="feed" component={PageLayout} store={store}>
    <IndexRoute component={Dashboard} />
  </Route>
);

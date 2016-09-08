/* global location require document $*/
import 'css/main';
import 'bootstrap/dist/js/bootstrap';
import 'whatwg-fetch';

import {render} from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import Layout	 	from 'common/containers/appLayout';
import NotFound from 'common/containers/notFound';
import createStore from 'common/createStore';

class Application {
	constructor(config) {
		this.config = config || {
			modules: []
		};
    this.store = createStore();
	}

	isAuthenticated(nextState, replace, callback) {
		callback();
	}

	getChildRoutes(state, callback) {
		const notFoundRoute = <Route path="*" component={NotFound}></Route>;
		const wasFound = this.config.modules.some((name) => {
			if (!location.pathname.startsWith('/page/' + name)) {
				return;
			}

			require(`bundle!app/${name}/routes`)((module) => {
				callback(null, [module(this.store), notFoundRoute]);
			});

			return true;
		});

		!wasFound && callback(null, [notFoundRoute]);
	}

	start() {
		let router = (
			<Router history={browserHistory}>
				<Route path="/page" component={Layout}
							getChildRoutes={this.getChildRoutes.bind(this)}
							onEnter={this.isAuthenticated.bind(this)}>
					<IndexRedirect to="/page/feed" />
				</Route>
			</Router>
		);

		$(document).ready(() => {
			render(router, document.querySelector('#app') || document.body);
		});
	}
}

export default Application;

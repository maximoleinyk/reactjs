import {render} from 'react-dom';
import {Router, Route, IndexRedirect} from 'react-router';
import history 	from 'common/history';
import Layout	 	from 'common/containers/appLayout';
import NotFound from 'common/containers/notFound';

class Application {
	constructor(config) {
		this.config = config || {
			modules: []
		};
	}

	isAuthenticated(nextState, replace, callback) {
		callback();
	}

	getChildRoutes(state, callback) {
		const notFoundRoute = {
			path: '*',
			component: NotFound
		};

		const wasFound = this.config.modules.some((name) => {
			if (!location.pathname.startsWith('/page/' + name)) {
				return;
			}

			require(`bundle!app/${name}/routes`)((module) => {
				callback(null, [module.default, {
					path: '*',
					onEnter: (state, replace, callback) => {
						replace('/page/404');
						callback();
					}
				}]);
			});

			return true;
		});

		!wasFound && callback(null, [notFoundRoute]);
	}

	start(modules) {
		let router = (
			<Router history={history}>
				<Route path="/page" component={Layout}
							 getChildRoutes={this.getChildRoutes.bind(this)}
							 onEnter={this.isAuthenticated.bind(this)}>
		    	<IndexRedirect to="/page/feed" />
		    </Route>
		  </Router>
		);

		render(router, document.querySelector('#app'));
	}
};

// to avoid doing new app.defaults(); in start.js
module.exports = Application;

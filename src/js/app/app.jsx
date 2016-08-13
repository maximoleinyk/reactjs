import React 		from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import history 	from 'common/history';
import Layout	 	from 'common/components/layout';
import Dashboard 	from 'common/components/dashboard';

class Application {
	constructor(config) {
		this.config = config || {
			modules: []
		};
		this.routes = [
			{
		    path: '/page',
		    component: Layout,
				indexRoute: {
					component: Dashboard
				},
		    getChildRoutes: this.getChildRoutes.bind(this)
		  }
		];
	}

	getChildRoutes(state, callback) {
		this.config.modules.forEach((name) => {
			if (!location.pathname.startsWith('/page/' + name)) {
				return;
			}

			require([`app/${name}/routes`], (module) => {
				callback(null, module.default);
			});
		});
	}

	start(modules) {
		let router = <Router history={history} routes={this.routes}/>;
		let $dom = document.querySelector('#app');

		render(router, $dom);
	}
};

// to avoid doing new app.defaults(); in start.js
module.exports = Application;

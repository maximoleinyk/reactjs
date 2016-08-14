import {browser} from 'common/browser';

const config = {
	modules: MODULES,
	version: VERSION,
	locale: LOCALE
};

if (browser.isCompatible()) {
	require(['app/app'], (Application) => {
		const app = new Application(config);

		app.start();
	});
}

module.exports = config;

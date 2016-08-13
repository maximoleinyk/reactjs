import {browser} from 'common/browser';

if (browser.isCompatible()) {
	require(['app/app'], (Application) => {
		let app = new Application({
			modules: [
				'account',
				'settings'
			]
		});

		app.start();
	});
}

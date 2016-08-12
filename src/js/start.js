import {browser} from 'common/browser';

if (browser.isCompatible()) {
	require(['app/app'], () => {
		console.log('Application started!');
	});
}

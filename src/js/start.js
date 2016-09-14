// @flow
/* global MODULES VERSION LOCALE require */
import browser from 'common/browser';

const config = {
  modules: MODULES,
  version: VERSION,
  locale: LOCALE
};

if (browser.isCompatible()) {
  // flow-ignore
  require(['app'], (Application) => {
    const app = new Application(config);

    app.start();
  });
}

export default config;

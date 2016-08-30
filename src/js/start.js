// @flow
/* global MODULES VERSION LOCALE module require */
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

module.exports = config;

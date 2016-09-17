/* global describe it assert */
import browser from 'common/browser';

describe('Browser API', () => {
  describe('#isCompartible', () => {
    it('should return true by default', () => {
      const result = browser.isCompatible();

      assert.isTrue(result, 'was not compartible');
    });
  });
});

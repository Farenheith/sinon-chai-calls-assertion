import { info } from './colors';
import { deepEquals } from './deep-equals';
import { fail } from './fail';

export function like(_chai: Chai.ChaiStatic, utils: Chai.ChaiUtils) {
  return function fn(this: Chai.AssertionStatic, expectedValue: object) {
    const actualCalls = utils.flag(this, 'object');

    const errors = deepEquals(actualCalls, expectedValue);

    if (errors) {
      fail(_chai, info(`Value's not like the expected: ${errors}`));
    }
  };
}

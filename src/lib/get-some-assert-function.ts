import { checkCallCount } from './check-call-count';
import { info, ids } from './colors';
import { checkSomeCallsError } from './check-some-calls-error';
import { fail } from './fail';

export function getSomeAssertFunction(
  _chai: Chai.ChaiStatic,
  utils: Chai.ChaiUtils,
  compareFunc: (actual: unknown, expected: unknown) => string,
) {
  return function fn(this: Chai.AssertionStatic, ...expectedCalls: object[][]) {
    const actualCalls: sinon.SinonStub = utils.flag(this, 'object');

    const errors = checkSomeCallsError(actualCalls, expectedCalls, compareFunc);

    if (errors) {
      fail(_chai, info(`On ${ids(actualCalls.name)}${errors}`));
    }
  };
}

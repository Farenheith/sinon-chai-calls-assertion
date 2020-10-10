import { checkCallCount } from './check-call-count';
import { checkCallsErrors } from './check-calls-errors';
import { info, ids } from './colors';

export function getAssertFunction(
  _chai: Chai.ChaiStatic,
  utils: Chai.ChaiUtils,
  compareFunc: (actual: unknown, expected: unknown) => string,
) {
  return function fn(this: Chai.AssertionStatic, ...expectedCalls: object[][]) {
    const actualCalls: sinon.SinonStub = utils.flag(this, 'object');
    let errors = checkCallCount(actualCalls, expectedCalls);

    errors += checkCallsErrors(actualCalls, expectedCalls, compareFunc);

    if (errors) {
      _chai.assert.fail(info(`On ${ids(actualCalls.name)}${errors}`));
    }
  };
}

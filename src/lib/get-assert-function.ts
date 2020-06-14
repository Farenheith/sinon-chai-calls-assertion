import { checkCallCount } from './check-call-count';
import { checkCallErrors } from './check-call-errors';
import { info, ids } from './colors';

export function getAssertFunction(
  _chai: Chai.ChaiStatic,
  utils: Chai.ChaiUtils,
  compareFunc: (actual: unknown, expected: unknown) => string,
) {
  return function fn(this: Chai.AssertionStatic, ...parameters: object[][]) {
    const stub: sinon.SinonStub = utils.flag(this, 'object');
    let errors = checkCallCount(stub, parameters);

    errors += checkCallErrors(parameters, stub, compareFunc);

    if (errors) {
      _chai.assert.fail(info(`On ${ids(stub.name)}${errors}`));
    }
  };
}

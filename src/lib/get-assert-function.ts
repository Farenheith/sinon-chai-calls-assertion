import { checkCallCount } from './check-call-count';
import { checkCallErrors } from './check-call-errors';

export function getAssertFunction(
  _chai: Chai.ChaiStatic,
  utils: Chai.ChaiUtils,
  compareFunc: (actual: unknown, expected: unknown) => boolean,
) {
  return function fn(this: Chai.AssertionStatic, ...parameters: object[][]) {
    const stub: sinon.SinonStub = utils.flag(this, 'object');
    let errors = checkCallCount(stub, parameters);

    errors += checkCallErrors(parameters, stub, compareFunc);

    if (errors) {
      _chai.assert.fail(`\x1b[37mOn \x1b[33m${stub.name}\x1b[31m${errors}`);
    }
  };
}

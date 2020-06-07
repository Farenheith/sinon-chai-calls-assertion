import { compareParameters } from './compare-parameters';
import { checkCallCount } from './check-call-count';
import { checkParametersCount } from './check-parameters-count';

export function getAssertFunction(
  utils: Chai.ChaiUtils,
  compareFunc: (actual: unknown, expected: unknown, j: number) => string,
) {
  return function fn(this: Chai.AssertionStatic, ...parameters: object[][]) {
    const stub: sinon.SinonStub = utils.flag(this, 'object');
    checkCallCount(stub, parameters);

    for (let i = 0; i < parameters.length; i++) {
      const lengthActual = stub.args[i].length;
      const lengthExpected = parameters[i].length;
      checkParametersCount(lengthActual, lengthExpected, i, stub);
      compareParameters(lengthActual, stub, i, parameters, compareFunc);
    }
  };
}

import { compareParameters } from './compare-parameters';
import { checkParametersCount } from './check-parameters-count';
import { SinonStub } from 'sinon';
import { ids } from './colors';
export function checkSingleCallError(
  actualCall: SinonStub<any[], any>,
  i: number,
  expected: object[],
  compareFunc: (actual: unknown, expected: unknown) => string,
) {
  const actual = actualCall.args[i];
  let callErrors = checkParametersCount(actual.length, expected.length);
  callErrors += compareParameters(actual, expected, compareFunc);

  return callErrors
    ? `
      Call ${ids(`#${i + 1}`)}:${callErrors}`
    : '';
}

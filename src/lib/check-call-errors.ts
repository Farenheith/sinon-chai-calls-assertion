import { compareParameters } from './compare-parameters';
import { checkParametersCount } from './check-parameters-count';
import { ids } from './colors';
import { SinonStub } from 'sinon';

export function checkCallErrors(
  actualCall: SinonStub,
  expectedCall: object[][],
  compareFunc: (actual: unknown, expected: unknown) => string,
) {
  let errors = '';
  const max = Math.min(expectedCall.length, actualCall.args.length);
  for (let i = 0; i < max; i++) {
    const actual = actualCall.args[i];
    const expected = expectedCall[i];
    let callErrors = checkParametersCount(actual.length, expected.length);
    callErrors += compareParameters(actual, expected, compareFunc);
    if (callErrors) {
      errors += `
  Call ${ids(`#${i + 1}`)}:${callErrors}`;
    }
  }
  return errors;
}

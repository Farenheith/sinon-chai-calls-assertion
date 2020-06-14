import { ids } from './colors';
import { SinonStub } from 'sinon';
import { checkSingleCallError } from './check-single-call-error';

export function checkCallsErrors(
  actualCall: SinonStub,
  expectedCall: object[][],
  compareFunc: (actual: unknown, expected: unknown) => string,
) {
  let errors = '';
  const max = Math.min(expectedCall.length, actualCall.args.length);
  for (let i = 0; i < max; i++) {
    errors += checkSingleCallError(actualCall, i, expectedCall[i], compareFunc);
  }
  return errors;
}

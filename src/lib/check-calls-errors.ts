import { SinonStub } from 'sinon';
import { checkSingleCallError } from './check-single-call-error';
import { isStub } from './is-stub';

export function checkCallsErrors(
  actualCall: SinonStub,
  expectedCall: object[][],
  compareFunc: (actual: unknown, expected: unknown) => string,
) {
  isStub(actualCall);
  let errors = '';
  const max = Math.min(expectedCall.length, actualCall.args.length);
  for (let i = 0; i < max; i++) {
    errors += checkSingleCallError(actualCall, i, expectedCall[i], compareFunc);
  }
  return errors;
}

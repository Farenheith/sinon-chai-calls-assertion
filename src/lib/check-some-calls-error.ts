import { SinonStub } from 'sinon';
import { checkSingleCallError } from './check-single-call-error';
import { isStub } from './is-stub';

export function checkSomeCallsError(
  actualCall: SinonStub,
  expectedCall: object[][],
  compareFunc: (actual: unknown, expected: unknown) => string,
) {
  isStub(actualCall);
  let accumulatedError = '';
  for (let c = 0; c < expectedCall.length; c++) {
    for (let i = 0; i < actualCall.callCount; i++) {
      const error = checkSingleCallError(
        actualCall,
        i,
        expectedCall[c],
        compareFunc,
      );
      if (!error) {
        return '';
      }
      accumulatedError += error;
    }
  }
  return accumulatedError;
}

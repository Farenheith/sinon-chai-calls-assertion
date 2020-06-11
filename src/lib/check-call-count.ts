import { right, wrong } from './colors';

export function checkCallCount(stub, parameters: object[][]) {
  return stub.callCount !== parameters.length
    ? `
    Call count:
      expected: ${right(parameters.length.toString())}
        actual: ${wrong(stub.callCount)}\n`
    : '';
}

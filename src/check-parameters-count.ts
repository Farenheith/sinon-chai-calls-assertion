import { SinonStub } from 'sinon';

export function checkParametersCount(
  lengthActual: number,
  lengthExpected: number,
  i: number,
  stub: SinonStub,
) {
  if (lengthActual !== lengthExpected) {
    throw new Error(
      `Expected call #${i} of ${stub.name} to have been called with ${lengthExpected} parameters but it was called with ${lengthActual}`,
    );
  }
}

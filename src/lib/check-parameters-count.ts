import { SinonStub } from 'sinon';
import { wrong, right } from './colors';

export function checkParametersCount(
  lengthActual: number,
  lengthExpected: number,
) {
  return lengthActual !== lengthExpected
    ? `
          Parameter count:
            expected: ${right(lengthExpected)}
            actual: ${wrong(lengthActual)}\n`
    : '';
}

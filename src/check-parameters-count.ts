import { SinonStub } from 'sinon';

export function checkParametersCount(
  lengthActual: number,
  lengthExpected: number,
) {
  return lengthActual !== lengthExpected
    ? `\x1b[37m
          Parameter count:
            expected: \x1b[32m${lengthExpected}
            \x1b[37m  actual: \x1b[31m${lengthActual}\n`
    : '';
}

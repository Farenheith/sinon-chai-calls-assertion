import { SinonStub } from 'sinon';
import { printComparison } from './print';

export function checkCallCount(actual: SinonStub, expected: object[][]) {
  return actual.callCount !== expected.length
    ? `
    Call count: ${printComparison(actual.callCount, expected.length)}\n`
    : '';
}

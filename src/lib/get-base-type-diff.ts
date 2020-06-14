import { printValue, printComparison } from './print';

export function getBaseTypeDiff(expected: unknown, actual: unknown) {
  const expectedInfo = printValue(expected);
  const actualInfo = printValue(actual);
  return printComparison(expectedInfo, actualInfo);
}

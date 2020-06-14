import { printValue, printComparison } from './print';

export function getBaseTypeDiff(actual: unknown, expected: unknown) {
  const actualInfo = printValue(actual);
  const expectedInfo = printValue(expected);

  return printComparison(actualInfo, expectedInfo);
}

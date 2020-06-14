import { printComparison } from './print';

export function checkParametersCount(
  lengthActual: number,
  lengthExpected: number,
) {
  return lengthActual !== lengthExpected
    ? `
          Parameter count: ${printComparison(lengthActual, lengthExpected)}\n`
    : '';
}

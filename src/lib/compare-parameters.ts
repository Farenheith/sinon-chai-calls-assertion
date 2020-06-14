import { ids } from './colors';

export function compareParameters(
  actual: any[],
  expected: object[],
  compareFunc: (actual: unknown, expected: unknown) => string,
) {
  const lengthActual = actual.length;
  const lengthExpected = expected.length;
  let parValues = '';
  const max = Math.min(lengthActual, lengthExpected);
  for (let j = 0; j < max; j++) {
    const result = compareFunc(actual[j], expected[j]);
    if (result) {
      parValues += `
      param ${ids(`#${j + 1}`)}: ${result}`;
    }
  }
  return parValues
    ? `
    Parameters:${parValues}`
    : '';
}

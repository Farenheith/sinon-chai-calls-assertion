import { ids } from './colors';

export function compareParameters(
  args: any[],
  parameters: object[],
  compareFunc: (actual: unknown, expected: unknown) => string,
) {
  const lengthActual = args.length;
  const lengthExpected = parameters.length;
  let parValues = '';
  const max = Math.min(lengthActual, lengthExpected);
  for (let j = 0; j < max; j++) {
    const actual = args[j];
    const expected = parameters[j];
    const result = compareFunc(actual, expected);
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

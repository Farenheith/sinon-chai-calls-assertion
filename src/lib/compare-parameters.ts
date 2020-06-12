import { buildDiff } from './build-diff';
import { ids } from './colors';

export function compareParameters(
  args: any[],
  parameters: object[],
  compareFunc: (actual: unknown, expected: unknown) => boolean,
) {
  const lengthActual = args.length;
  const lengthExpected = parameters.length;
  let parValues = '';
  let error = false;
  const max = Math.min(lengthActual, lengthExpected);
  for (let j = 0; j < max; j++) {
    const actual = args[j];
    const expected = parameters[j];
    parValues += `
      param ${ids(`#${j + 1}`)}: `;
    if (compareFunc(actual, expected)) {
      parValues += actual;
    } else {
      error = true;
      parValues += buildDiff(expected, actual);
    }
  }
  return error
    ? `
    Parameters:${parValues}`
    : '';
}

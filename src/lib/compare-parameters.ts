import { getTypeDescription } from './get-type-description';

export function compareParameters(
  lengthActual: number,
  lengthExpected: number,
  stub,
  i: number,
  parameters: object[][],
  compareFunc: (actual: unknown, expected: unknown) => boolean,
) {
  let parValues = '';
  let error = false;
  const max = Math.min(lengthActual, lengthExpected);
  for (let j = 0; j < max; j++) {
    const actual = stub.args[i][j];
    const expected = parameters[i][j];
    parValues += `\x1b[37m
      param \x1b[33m#${j + 1}\x1b[37m: `;
    if (compareFunc(actual, expected)) {
      parValues += actual;
    } else {
      error = true;
      parValues += `\x1b[32m<${getTypeDescription(
        expected,
      )}>${expected} \x1b[31m<${getTypeDescription(actual)}>${actual}`;
    }
  }
  return error
    ? `\x1b[37m
          Parameters:${parValues}`
    : '';
}

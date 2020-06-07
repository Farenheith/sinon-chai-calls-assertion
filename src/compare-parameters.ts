export function compareParameters(
  lengthActual: number,
  stub,
  i: number,
  parameters: object[][],
  compareFunc: (actual: unknown, expected: unknown, j: number) => string,
) {
  let paramErrors = '';
  for (let j = 0; j < lengthActual; j++) {
    const actual = stub.args[i][j];
    const expected = parameters[i][j];
    paramErrors += compareFunc(actual, expected, j);
  }
  if (paramErrors !== '') {
    throw new Error(
      `Expected call #${i} of ${stub.name} to have \n${paramErrors}`,
    );
  }
}

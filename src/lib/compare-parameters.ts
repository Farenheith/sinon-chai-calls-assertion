import { SinonStub } from 'sinon';
import { buildDiff } from './build-diff';

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
    parValues += `\x1b[37m
      param \x1b[33m#${j + 1}\x1b[37m: `;
    if (compareFunc(actual, expected)) {
      parValues += actual;
    } else {
      error = true;
      parValues += buildDiff(expected, actual);
    }
  }
  return error
    ? `\x1b[37m
          Parameters:${parValues}`
    : '';
}

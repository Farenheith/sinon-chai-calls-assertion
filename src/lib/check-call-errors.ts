import { compareParameters } from './compare-parameters';
import { checkParametersCount } from './check-parameters-count';

export function checkCallErrors(
  parameters: object[][],
  stub,
  compareFunc: (actual: unknown, expected: unknown) => boolean,
) {
  let errors = '';
  const max = Math.min(parameters.length, stub.args.length);
  for (let i = 0; i < max; i++) {
    const lengthActual = stub.args[i].length;
    const lengthExpected = parameters[i].length;
    let callErrors = checkParametersCount(lengthActual, lengthExpected);
    callErrors += compareParameters(
      lengthActual,
      lengthExpected,
      stub,
      i,
      parameters,
      compareFunc,
    );
    if (callErrors) {
      errors += `\x1b[37m
        Call \x1b[33m#${i + 1}\x1b[37m:${callErrors}`;
    }
  }
  return errors;
}

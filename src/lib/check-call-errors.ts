import { compareParameters } from './compare-parameters';
import { checkParametersCount } from './check-parameters-count';
import { ids } from './colors';

export function checkCallErrors(
  parameters: object[][],
  stub,
  compareFunc: (actual: unknown, expected: unknown) => boolean,
) {
  let errors = '';
  const max = Math.min(parameters.length, stub.args.length);
  for (let i = 0; i < max; i++) {
    const args = stub.args[i];
    const expectedParameters = parameters[i];
    let callErrors = checkParametersCount(
      args.length,
      expectedParameters.length,
    );
    callErrors += compareParameters(args, expectedParameters, compareFunc);
    if (callErrors) {
      errors += `
  Call ${ids(`#${i + 1}`)}:${callErrors}`;
    }
  }
  return errors;
}

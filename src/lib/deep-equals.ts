import { match } from './match';
import { mustGoDeep } from './must-go-deep';
import { compareDeep } from './compare-deep';

export function deepEquals(actual: unknown, expected: unknown): string {
  if (!mustGoDeep(actual, expected)) {
    return match(actual, expected);
  }

  const result = compareDeep(actual, expected, '  ');

  return result ? `{${result}\n}` : '';
}

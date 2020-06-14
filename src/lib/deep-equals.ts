import { match } from './match';
import { mustGoDeep } from './must-go-deep';
import { compareDeep } from './compare-deep';

export function deepEquals(actual: unknown, expected: unknown): string {
  if (!mustGoDeep(expected, actual)) {
    return match(expected, actual);
  }

  const result = compareDeep(expected, actual, '  ');

  return result ? `{${result}\n}` : '';
}

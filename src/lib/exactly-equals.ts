import { getBaseTypeDiff } from './get-base-type-diff';

export function exactlyEquals(actual: unknown, expected: unknown) {
  return actual === expected ? '' : getBaseTypeDiff(actual, expected);
}

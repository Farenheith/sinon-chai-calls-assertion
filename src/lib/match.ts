import { assert } from 'sinon';
import { getBaseTypeDiff } from './get-base-type-diff';

export function match(actual: unknown, expected: unknown) {
  let matchResult: boolean;
  try {
    if (actual !== expected) {
      assert.match(actual, expected);
    }
    matchResult = true;
  } catch (err) {
    matchResult = false;
  }
  return matchResult ? '' : getBaseTypeDiff(actual, expected);
}

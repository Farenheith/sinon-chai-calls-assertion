import { assert } from 'sinon';
import { getBaseTypeDiff } from './get-base-type-diff';
import { isMatcher } from './is-matcher';
import { shouldFailOnExactCompare } from './validate-type';
export function match(actual: unknown, expected: unknown) {
  let matchResult: boolean = true;
  try {
    if (actual !== expected) {
      if (shouldFailOnExactCompare(typeof actual, typeof expected)) {
        matchResult = false;
      } else {
        assert.match(actual, expected);
        if (!isMatcher(expected)) {
          assert.match(expected, actual);
        }
      }
    }
  } catch (err) {
    matchResult = false;
  }
  return matchResult ? '' : getBaseTypeDiff(actual, expected);
}

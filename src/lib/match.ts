import { assert } from 'sinon';
import { getBaseTypeDiff } from './get-base-type-diff';

export function match(e: unknown, a: unknown) {
  let matchResult: boolean;
  try {
    if (a !== e) {
      assert.match(a, e);
    }
    matchResult = true;
  } catch (err) {
    matchResult = false;
  }
  return matchResult ? '' : getBaseTypeDiff(a, e);
}

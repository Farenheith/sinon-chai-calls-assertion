import { assert } from 'sinon';
import { getBaseTypeDiff } from './get-base-type-diff';
import { expect } from 'chai';

export function match(actual: unknown, expected: unknown) {
  let matchResult: boolean;
  try {
    if (typeof actual === 'string' && typeof expected === 'string') {
      expect(actual).to.be.eqls(expected);
    }
    if (actual !== expected) {
      assert.match(actual, expected);
    }
    matchResult = true;
  } catch (err) {
    matchResult = false;
  }
  return matchResult ? '' : getBaseTypeDiff(actual, expected);
}

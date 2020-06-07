import { assert } from 'sinon';

export function deepEquals(actual: unknown, expected: unknown): boolean {
  let result: boolean;
  try {
    if (actual !== expected) {
      assert.match(actual, expected);
    }
    result = true;
  } catch (err) {
    result = false;
  }
  return result;
}

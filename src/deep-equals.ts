import { assert, match, expectation } from 'sinon';
import Sinon = require('sinon');

export function getDeepEquals({ assert }: any) {
  return function (actual: unknown, expected: unknown, j: number): string {
    let error = '';
    try {
      if (actual !== expected) {
        assert.match(actual, expected);
      }
    } catch {
      error = `param ${j} as \n\x1b[32m${JSON.stringify(
        expected,
      )}\x1b[31m\n but it was \n\x1b[32m${JSON.stringify(actual)}\n`;
    }
    return error;
  };
}

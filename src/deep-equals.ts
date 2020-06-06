const deepEqual = require('@sinonjs/samsam').deepEqual;

export function deepEquals(actual: any[], expected: any[], j: number) {
  return !deepEqual(actual, expected)
    ? `param ${j} as \n\x1b[32m${JSON.stringify(
        expected,
      )}\x1b[31m\n but it was \n\x1b[32m${JSON.stringify(actual)}\n`
    : '';
}

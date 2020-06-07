export function exactlyEquals(actual: unknown, expected: unknown, j: number) {
  return actual !== expected
    ? `param ${j} exactly as \n\x1b[32m${JSON.stringify(
        expected,
      )}\x1b[31m\n but it was \n\x1b[32m${JSON.stringify(actual)}\n`
    : '';
}

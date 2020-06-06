export function exactlyEquals(actual: any[], expected: object[], j: number) {
  return actual.every((a, i) => a === expected[i])
    ? `param ${j} exactly as \n\x1b[32m${JSON.stringify(
        expected,
      )}\x1b[31m\n but it was \n\x1b[32m${JSON.stringify(actual)}\n`
    : '';
}

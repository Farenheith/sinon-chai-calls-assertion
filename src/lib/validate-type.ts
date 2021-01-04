export function shouldFailOnExactCompare(
  actual: string,
  expected: string,
): boolean {
  return actual === 'string' && expected === 'string';
}

export function removeSuccessMatchers(actual: object, expected: object) {
  const expectedProps = Object.entries(expected);
  for (const [key, value] of expectedProps) {
    if (typeof value === 'object' && actual[key]) {
      if (typeof value.test === 'function') {
        if (value.test(actual[key])) {
          expected[key] = actual[key];
        } else {
          expected[key] = `<Matcher>${expected[key].message}`;
          if (actual[key] === expected[key]) {
            expected[key] += '!';
          }
        }
      } else {
        removeSuccessMatchers(actual[key], expected[key]);
      }
    }
  }
}

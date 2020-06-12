import { getTypeDescription } from './get-type-description';
import { right, wrong } from './colors';
import { removeSuccessMatchers } from './sinon-diff';
import diff = require('variable-diff');

function getBaseTypeDiff(expected: object, actual: any) {
  const expectedInfo = `<${getTypeDescription(expected)}>${expected}`;
  const actualInfo = `<${getTypeDescription(actual)}>${actual}`;
  let result = `${right(expectedInfo)} ${wrong(actualInfo)}`;
  if (expectedInfo === actualInfo) {
    result += ' (different instances)';
  }

  return result;
}

function isJsonComparable(value: any) {
  return (
    typeof value === 'object' &&
    typeof value.test !== 'function' &&
    Object.keys(value).length > 0
  );
}

function getJSONDiff(expected: object, actual: any) {
  removeSuccessMatchers(actual, expected);
  const result = diff(actual, expected);
  return result.changed ? result.text : getBaseTypeDiff(expected, actual);
}

export function buildDiff(expected: object, actual: any) {
  return isJsonComparable(expected) && isJsonComparable(actual)
    ? getJSONDiff(expected, actual)
    : getBaseTypeDiff(expected, actual);
}

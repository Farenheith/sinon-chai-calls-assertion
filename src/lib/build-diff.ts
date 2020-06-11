import { getTypeDescription } from './get-type-description';
import { diffString } from 'json-diff';
import { right, wrong } from './colors';

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
  return typeof value === 'object' && Object.keys(value).length > 0;
}

function getJSONDiff(expected: object, actual: any) {
  return diffString(actual, expected) || getBaseTypeDiff(expected, actual);
}

export function buildDiff(expected: object, actual: any) {
  return isJsonComparable(expected) && isJsonComparable(actual)
    ? getJSONDiff(expected, actual)
    : getBaseTypeDiff(expected, actual);
}

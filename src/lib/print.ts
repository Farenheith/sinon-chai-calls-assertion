import { right, wrong } from './colors';
import { isMatcher } from '../is-matcher';
import { describeMatcher } from './describe-matcher';
import { stringify } from './stringify';

export function printValue(value: any) {
  let result: string;

  if (isMatcher(value)) {
    result = describeMatcher(value);
  } else {
    result = stringify(value);
    if (result.startsWith('{')) {
      result = `<${(value as object)['constructor'].name}>${result}`;
    }
  }

  return result;
}

export function printComparison(expectedInfo: string, actualInfo: string) {
  let result = `${right(expectedInfo)} ${wrong(actualInfo)}`;
  if (expectedInfo === actualInfo) {
    result += ' (different instances)';
  }
  return result;
}

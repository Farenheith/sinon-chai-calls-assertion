import { matchers } from './colors';
import { isMatcher } from './is-matcher';
import { describeMatcher } from './describe-matcher';

function validDuplicity(v: any, objects: Set<object>) {
  if (typeof v === 'object' && v !== null) {
    if (objects.has(v)) {
      return matchers('Circular');
    }
    objects.add(v);
  }

  return v;
}

function stringifyEntry(objects: Set<object>) {
  return (_k: string, v: any) =>
    isMatcher(v) ? describeMatcher(v) : validDuplicity(v, objects);
}

export function stringify(value: unknown): string {
  const objects = new Set<object>();
  const result = JSON.stringify(value, stringifyEntry(objects));

  return result.replace(/\"?\\u001b\[(\d+)m\"?/g, '\u001b[$1m');
}

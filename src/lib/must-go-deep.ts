import { isJsonComparable } from './is-json-comparable';
export function mustGoDeep(a: unknown, e: unknown) {
  return isJsonComparable(a) && isJsonComparable(e);
}

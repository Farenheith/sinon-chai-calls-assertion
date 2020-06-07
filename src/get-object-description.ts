import { isMatcher } from './is-matcher';

export function getObjectDescription(obj: object) {
  if (isMatcher(obj)) {
    return 'Matcher';
  }
  return obj.constructor.name;
}

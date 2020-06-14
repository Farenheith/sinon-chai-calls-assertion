import { matchers } from './colors';

export function describeMatcher(v: { message: string }): any {
  return matchers(`<Matcher>${v.message.replace(/"/g, "'")}`);
}

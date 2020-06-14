import { printComparison, printValue } from './print';
import { lack } from './colors';
import { match } from './match';
import { mustGoDeep } from './must-go-deep';
import { createComparableEntries } from './create-comparable-entries';

export function compareDeep(e: any, a: any, tab: string) {
  let deepResult = '';
  const entries = createComparableEntries(a, e);
  const prefix = `\n${tab}${lack('...')}\n${tab}`;
  for (const [key, { actualInfo, expectedInfo }] of entries) {
    if (actualInfo) {
      if (expectedInfo) {
        const eValue = expectedInfo.value;
        const { value } = actualInfo;
        if (mustGoDeep(eValue, value)) {
          const compareResult = compareDeep(eValue, value, `${tab}  `);
          if (compareResult) {
            deepResult += `${prefix}${key}: {${compareResult},\n${tab}}`;
          }
        } else {
          const matchResult = match(eValue, value);
          if (matchResult) {
            deepResult += `${prefix}${key}: ${matchResult},`;
          }
        }
      } else {
        deepResult += `${prefix}${key}: ${printComparison(
          lack('not expected!'),
          printValue(actualInfo.value),
        )},`;
      }
    } else {
      deepResult += `${prefix}${key}: ${printComparison(
        printValue(expectedInfo.value),
        lack('not informed!'),
      )},`;
    }
  }

  return deepResult;
}

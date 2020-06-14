import { printComparison, printValue } from './print';
import { lack } from './colors';
import { match } from './match';
import { mustGoDeep } from './must-go-deep';
import { createComparableEntries } from './create-comparable-entries';

export function compareDeep(actual: any, expected: any, tab: string) {
  let deepResult = '';
  const entries = createComparableEntries(actual, expected);
  const prefix = `\n${tab}${lack('...')}\n${tab}`;
  for (const [key, { actualInfo, expectedInfo }] of entries) {
    if (actualInfo) {
      if (expectedInfo) {
        const actualValue = actualInfo.value;
        const expectedValue = expectedInfo.value;
        if (mustGoDeep(actualValue, expectedValue)) {
          const compareResult = compareDeep(
            actualValue,
            expectedValue,
            `${tab}  `,
          );
          if (compareResult) {
            deepResult += `${prefix}${key}: {${compareResult},\n${tab}}`;
          }
        } else {
          const matchResult = match(actualValue, expectedValue);
          if (matchResult) {
            deepResult += `${prefix}${key}: ${matchResult},`;
          }
        }
      } else {
        deepResult += `${prefix}${key}: ${printComparison(
          printValue(actualInfo.value),
          lack('not expected!'),
        )},`;
      }
    } else {
      deepResult += `${prefix}${key}: ${printComparison(
        lack('not informed!'),
        printValue(expectedInfo.value),
      )},`;
    }
  }

  return deepResult;
}

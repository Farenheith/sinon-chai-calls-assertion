export interface ValueDescription {
  value: any;
}

export interface ActualExpectedMap {
  actualInfo?: ValueDescription;
  expectedInfo?: ValueDescription;
}

function getAddActual(
  entries: Map<string, ActualExpectedMap>,
): (
  value: [string, unknown],
  index: number,
  array: [string, unknown][],
) => void {
  return ([key, value]) =>
    entries.set(key, {
      actualInfo: {
        value,
      },
    });
}

function getAddExpected(
  entries: Map<string, ActualExpectedMap>,
): (
  value: [string, unknown],
  index: number,
  array: [string, unknown][],
) => void {
  return ([key, value]) => {
    const v = entries.get(key);
    if (v) {
      v.expectedInfo = { value };
    } else {
      entries.set(key, {
        expectedInfo: {
          value,
        },
      });
    }
  };
}

export function createComparableEntries(actual: any, expected: any) {
  const entries = new Map();
  Object.entries(actual).forEach(getAddActual(entries));
  Object.entries(expected).forEach(getAddExpected(entries));
  return entries;
}

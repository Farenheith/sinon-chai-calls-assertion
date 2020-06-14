export function isJsonComparable(value: any) {
  return (
    typeof value === 'object' &&
    typeof value.test !== 'function' &&
    Object.keys(value).length > 0
  );
}

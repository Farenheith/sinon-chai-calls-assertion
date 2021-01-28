export function isMatcher(obj: unknown) {
  return (
    obj &&
    typeof obj === 'object' &&
    obj.constructor.name === 'Object' &&
    typeof obj['test'] === 'function' &&
    typeof obj['message'] === 'string'
  );
}

export function isMatcher(obj: object) {
  return (
    obj &&
    obj.constructor.name === 'Object' &&
    typeof obj['test'] === 'function' &&
    typeof obj['message'] === 'string'
  );
}

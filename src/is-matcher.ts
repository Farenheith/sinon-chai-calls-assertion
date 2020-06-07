export function isMatcher(obj: object) {
  return (
    obj.constructor.name === 'Object' &&
    typeof obj['test'] === 'function' &&
    typeof obj['message'] === 'string'
  );
}

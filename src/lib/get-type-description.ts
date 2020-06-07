import { getObjectDescription } from './get-object-description';

export function getTypeDescription(value: unknown) {
  const basicResult = typeof value;

  if (basicResult === 'object') {
    return getObjectDescription(value as object);
  }
  return basicResult;
}

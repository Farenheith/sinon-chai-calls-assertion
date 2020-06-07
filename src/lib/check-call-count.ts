export function checkCallCount(stub, parameters: object[][]) {
  return stub.callCount !== parameters.length
    ? `\x1b[37m
      Call count:
        expected: \x1b[32m${parameters.length}
        \x1b[37m  actual: \x1b[31m${stub.callCount}\n`
    : '';
}

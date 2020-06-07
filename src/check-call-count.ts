export function checkCallCount(stub, parameters: object[][]) {
  if (stub.callCount !== parameters.length) {
    throw new Error(
      `Expected ${stub.name} to have been called ${parameters.length} times but it was called ${stub.callCount} times\n`,
    );
  }
}

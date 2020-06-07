export function getAssertFunction(
  utils: Chai.ChaiUtils,
  compareFunc: (actual: unknown, expected: unknown, j: number) => string,
) {
  return function fn(this: Chai.AssertionStatic, ...parameters: object[][]) {
    const stub: sinon.SinonStub = utils.flag(this, 'object');
    if (stub.callCount !== parameters.length) {
      throw new Error(
        `Expected ${stub.name} to have been called ${parameters.length} times but it was called ${stub.callCount} times\n`,
      );
    }
    for (let i = 0; i < parameters.length; i++) {
      const lengthActual = stub.args[i].length;
      const lengthExpected = parameters[i].length;
      if (lengthActual !== lengthExpected) {
        throw new Error(
          `Expected call #${i} of ${stub.name} to have been called with ${lengthExpected} parameters but it was called with ${lengthActual}`,
        );
      }
      let paramErrors = '';
      for (let j = 0; j < lengthActual; j++) {
        const actual = stub.args[i][j];
        const expected = parameters[i][j];
        paramErrors += compareFunc(actual, expected, j);
      }
      if (paramErrors !== '') {
        throw new Error(
          `Expected call #${i} of ${stub.name} to have \n${paramErrors}`,
        );
      }
    }
  };
}

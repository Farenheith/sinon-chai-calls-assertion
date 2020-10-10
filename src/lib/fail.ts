export function fail(_chai: Chai.ChaiStatic, message: string) {
  try {
    _chai.assert.fail(message);
  } catch (error) {
    const stack = error.stack.replace(/.+at.+\/node_modules\/chai-callslike.+\n/g, '');
    delete error.stack;
    Object.defineProperty(error, 'stack', {
      get: () => stack,
    });
    throw error;
  }
}

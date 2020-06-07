import { getAssertFunction, deepEquals, exactlyEquals } from './lib';

export function callsLike(_chai: Chai.ChaiStatic, utils: Chai.ChaiUtils) {
  utils.addMethod(
    _chai.Assertion.prototype,
    'callsLike',
    getAssertFunction(_chai, utils, deepEquals),
  );
  utils.addMethod(
    _chai.Assertion.prototype,
    'callsLikeRef',
    getAssertFunction(_chai, utils, exactlyEquals),
  );
}

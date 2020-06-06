import { deepEquals } from './deep-equals';
import { getAssertFunction } from './get-assert-function';
import { exactlyEquals } from './exactly-equals';

export function callsLike(_chai: Chai.ChaiStatic, utils: Chai.ChaiUtils) {
  utils.addMethod(
    _chai.Assertion.prototype,
    'callsLike',
    getAssertFunction(utils, deepEquals),
  );
  utils.addMethod(
    _chai.Assertion.prototype,
    'callsLikeExactly',
    getAssertFunction(utils, exactlyEquals),
  );
}

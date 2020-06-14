import { getAssertFunction } from './get-assert-function';
import { deepEquals } from './deep-equals';
import { exactlyEquals } from './exactly-equals';

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

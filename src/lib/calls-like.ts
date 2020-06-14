import { getAssertFunction } from './get-assert-function';
import { deepEquals } from './deep-equals';
import { exactlyEquals } from './exactly-equals';
import { getSomeAssertFunction } from './get-some-assert-function copy';

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
  utils.addMethod(
    _chai.Assertion.prototype,
    'someCallsLike',
    getSomeAssertFunction(_chai, utils, deepEquals),
  );
  utils.addMethod(
    _chai.Assertion.prototype,
    'someCallsLikeRef',
    getSomeAssertFunction(_chai, utils, exactlyEquals),
  );
}

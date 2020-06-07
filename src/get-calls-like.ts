import { exactlyEquals } from './exactly-equals';
import { getDeepEquals } from './deep-equals';
import { getAssertFunction } from './get-assert-function';

export function getCallsLike(sinon: any) {
  return function (_chai: Chai.ChaiStatic, utils: Chai.ChaiUtils) {
    utils.addMethod(
      _chai.Assertion.prototype,
      'callsLike',
      getAssertFunction(utils, getDeepEquals(sinon)),
    );
    utils.addMethod(
      _chai.Assertion.prototype,
      'callsLikeExactly',
      getAssertFunction(utils, exactlyEquals),
    );
  };
}

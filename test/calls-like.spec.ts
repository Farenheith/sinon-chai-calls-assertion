import * as sinon from 'sinon';
import '../src/index';

import { expect } from 'chai';
import * as chai from 'chai';
import { callsLike } from '../src/calls-like';

describe('expect-call', () => {
  chai.use(callsLike);
  afterEach(() => {
    sinon.restore();
  });

  describe('expect.callsLike', () => {
    let stub: sinon.SinonStub;
    beforeEach(() => {
      stub = sinon.stub();
      stub(1, '2', true);
      stub('1', 2, false);
    });

    it('should accept first comparison and reject second one', () => {
      const expectator = expect(stub);
      let error: Error;
      try {
        expectator.callsLike(
          [1, sinon.match(/\d/), true],
          ['1', sinon.match.number, sinon.match.string],
        );
      } catch (err) {
        error = err;
      }
      expect(error!.message).to.match(/^Expected call #1/);
    });

    it('should accept first comparison and reject second one for lack of parameters', () => {
      const expectator = expect(stub);
      let error: Error;
      try {
        expectator.callsLike(
          [1, sinon.match.string, true],
          ['1', sinon.match.number],
        );
      } catch (err) {
        error = err;
      }
      expect(error!.message).to.match(/^Expected call #1/);
    });

    it('should pass tests and return another assertion', () => {
      const expectator = expect(stub);
      let error: Error;
      let result: Chai.Assertion;
      try {
        result = expectator.callsLike(
          [1, sinon.match.string, true],
          ['1', sinon.match.number, sinon.match.bool],
        );
      } catch (err) {
        error = err;
      }
      expect(error!).to.be.undefined;
      expect(result!).to.be.instanceOf(chai.Assertion);
    });
  });

  describe('expect.callsLikeExactly', () => {
    let stub: sinon.SinonStub;
    beforeEach(() => {
      stub = sinon.stub();
      stub(1, '2', true);
      stub('1', 2, false);
    });

    it('should accept both calls', () => {
      const expectator = expect(stub);

      expectator.callsLikeExactly([1, '2', true], ['1', 2, false]);
    });

    it('should reject on the first comparison', () => {
      const expectator = expect(stub);
      let error: Error;
      try {
        expectator.callsLikeExactly(
          [1, 'sinon.match(/d/)', true],
          ['1', sinon.match.number, sinon.match.bool],
        );
      } catch (err) {
        error = err;
      }
      expect(error!.message).to.match(/^Expected call #0/);
    });
  });
});

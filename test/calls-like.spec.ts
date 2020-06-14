import '../src/index';

import { expect } from 'chai';
import * as chai from 'chai';
import { callsLike } from '../src/calls-like';
import { match, restore, SinonStub, stub } from 'sinon';

describe('expect-call', () => {
  chai.use(callsLike);
  class Test {
    deep = {
      value: 123,
    };
    value2 = 'test';
  }
  const testObj = new Test();

  afterEach(() => {
    restore();
  });

  describe('expect.callsLike', () => {
    let myStub: SinonStub;
    beforeEach(() => {
      myStub = stub().named('myStub');
      myStub(1, '2', true);
      myStub('1', testObj, false);
    });

    it('should reject comparison due to call count', () => {
      const expectator = expect(myStub);
      let error: Error;
      try {
        expectator.callsLike([1, match(/\d/), true]);
      } catch (err) {
        error = err;
      }
      expect(error!.message).to.match(/Call count/);
    });

    it('should accept first comparison and reject second one', () => {
      const expectator = expect(myStub);
      let error: Error;
      try {
        expectator.callsLike(
          [1, match(/\d/), true],
          ['1', match.number, match.string],
        );
      } catch (err) {
        error = err;
      }

      expect(error!.message)
        .to.match(/Call.+#2/)
        .to.not.match(/Call.+#1/);
    });

    it('should accept first comparison and reject second one for lack of parameters', () => {
      const expectator = expect(myStub);
      let error: Error;
      try {
        expectator.callsLike([1, match.string, true], ['1', match.number]);
      } catch (err) {
        error = err;
      }
      expect(error!.message)
        .to.match(/Call.+#2/)
        .to.not.match(/Call.+#1/);
    });

    it('should pass tests and return another assertion', () => {
      const expectator = expect(myStub);
      let error: Error;
      let result: Chai.Assertion;
      try {
        result = expectator.callsLike(
          [1, match.string, true],
          [
            '1',
            { deep: { value: match.number }, value2: match.string },
            match.bool,
          ],
        );
      } catch (err) {
        error = err;
      }
      expect(error!).to.be.undefined;
      expect(result!).to.be.instanceOf(chai.Assertion);
    });

    it('should give all errors', () => {
      const expectator = expect(myStub);
      let error: Error;
      const test: any = {};
      test.testDeep = test;

      try {
        expectator.callsLike(
          [1, 'match(/d/)'],
          [
            { t: match.number },
            { deep: { value: match.string }, value3: match.number, test },
            match.bool,
          ],
          ['1', match.number, match.bool],
        );
      } catch (err) {
        error = err;
      }
      console.log(error!.message);

      expect(error!.message)
        .to.match(/Call count/)
        .to.match(/Parameter count/)
        .to.match(/Parameters/);
    });
  });

  describe('expect.callsLikeRef', () => {
    let myStub: SinonStub;

    beforeEach(() => {
      myStub = stub().named('myStub');
      myStub(1, '2', true);
      myStub('1', testObj, false);
    });

    it('should accept both calls', () => {
      const expectator = expect(myStub);

      expectator.callsLikeRef([1, '2', true], ['1', testObj, false]);
    });

    it('should reject on the first and second comparison', () => {
      const expectator = expect(myStub);
      let error: Error;
      try {
        expectator.callsLikeRef(
          [1, 'match(/d/)', true],
          ['1', new Test(), match.bool],
        );
      } catch (err) {
        error = err;
      }
      expect(error!.message)
        .to.match(/Parameters/)
        .to.match(/Call.+#1/)
        .to.match(/Call.+#2/);
    });
  });
});

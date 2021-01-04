import '../src/index';

import { expect } from 'chai';
import * as chai from 'chai';
import { match, restore, SinonStub, stub } from 'sinon';
import { callsLike } from '../src/index';

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
    let myStub2: SinonStub;
    beforeEach(() => {
      myStub = stub().named('myStub');
      myStub(1, '2', true);
      myStub('1', testObj, false);

      myStub2 = stub().named('myStub2');
      myStub2('my test');
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

    it('should reject if first string is bigger than the second', () => {
      const expectator = expect(myStub2);
      let error: Error;
      try {
        expectator.callsLike(['test']);
      } catch (err) {
        error = err;
      }

      expect(error!).to.be.not.undefined;
    });

    it('should pass if first string is equal to the second', () => {
      const expectator = expect(myStub2);
      let error: Error;
      try {
        expectator.callsLike(['my test']);
      } catch (err) {
        error = err;
      }

      expect(error!).to.be.undefined;
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

    it('should check for if informed stub is really a stub', () => {
      let error: any;

      try {
        expect(() => true).to.have.callsLike(['params']);
      } catch (err) {
        error = err;
      }

      expect(error.message).to.match(/Not a stub!.*/);
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

  describe('expect.someCallsLike', () => {
    let myStub: SinonStub;
    beforeEach(() => {
      myStub = stub().named('myStub');
      myStub(1, '2', true);
      myStub('1', testObj, false);
    });

    it('should accept for second comparison', () => {
      const expectator = expect(myStub);

      expectator.someCallsLike(['1', match.object, match.bool]);
    });

    it('should reject when no call matches', () => {
      const expectator = expect(myStub);
      let error: Error;
      try {
        expectator.someCallsLike([1, match.number, true]);
      } catch (err) {
        error = err;
      }
      expect(error!.message)
        .to.match(/Call.+#1/)
        .to.match(/Call.+#2/);
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

    it('should check for if informed stub is really a stub', () => {
      let error: any;

      try {
        expect(() => true).to.have.someCallsLike(['params']);
      } catch (err) {
        error = err;
      }

      expect(error.message).to.match(/Not a stub!.*/);
    });
  });
});

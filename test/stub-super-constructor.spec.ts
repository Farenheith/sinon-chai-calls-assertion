import * as sinon from 'sinon';
import '../src/index';

import { expect } from 'chai';
import { stubSuperConstructor } from '../src/index';

class TestBase {
  a: number;
  constructor() {
    this.a = 1;
  }
}

class Test extends TestBase {
  b: number;
  constructor() {
    super();
    this.b = 2;
  }
}

let error: Error;
try {
  stubSuperConstructor(Test);
} catch (err) {
  error = err;
}

describe('stub-super-constructor.ts', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('stubSuperConstructor()', () => {
    it('should throw error if it is called outside test scope', () => {
      expect(error!).to.be.instanceOf(Error);
    });

    it('should mock super constructor', () => {
      const stubSuper = stubSuperConstructor(Test);

      const target = new Test();

      expect(stubSuper.calledOnce).to.be.true;
      expect(target.a).to.be.undefined;
    });

    it('should throw error trying to mock unexisting super', () => {
      let threwError: Error;
      try {
        stubSuperConstructor(TestBase);
      } catch (err) {
        threwError = err;
      }

      expect(threwError!).to.be.instanceOf(Error);
    });
  });
});

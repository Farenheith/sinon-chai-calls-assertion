import * as sinon from 'sinon';
import '../src';

import { afterEach, beforeEach, describe, it } from 'mocha';

import { expect } from 'chai';
import { stubSuperConstructor } from '../src/stub-super-constructor';

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

describe('stub-super-constructor.ts', () => {
	afterEach(() => {
		sinon.restore();
	});

	describe('stubSuperConstructor()', () => {
		it('should mock super constructor', () => {
			const stubSuper = stubSuperConstructor(Test);
			
			const target = new Test();

			expect(stubSuper.calledOnce).to.be.true;
			expect(target.a).to.be.undefined;
		});

		it('should throw error trying to mock unexisting super', () => {
			let error: Error;
			try {
				stubSuperConstructor(TestBase);
			} catch (err) {
				error = err;
			}
			
			
			expect(error!).to.be.instanceOf(Error);
		});
	});
});

import '../src/sinon-chai-calls-assertion';
import * as sinon from 'sinon';
import '../src/sinon-chai-calls-assertion';

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

		it('should accept first parameter comparison and reject second one', () => {
			const expectator = expect(stub);
			let error: Error;
			try {
				expectator.callsLike(
					[1, sinon.match.string, true],
					['1', sinon.match.number, sinon.match.string]);
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
					['1', sinon.match.number, sinon.match.bool]);
			} catch (err) {
				error = err;
			}
			expect(error!).to.be.undefined;
			expect(result!).to.be.instanceOf(chai.Assertion)
		});
	});
});

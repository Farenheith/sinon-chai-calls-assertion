import * as sinon from 'sinon';
import '../src';

import { afterEach, beforeEach, describe, it } from 'mocha';

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
			expectator.callsLike(
				[1, sinon.match.string, true],
				['1', sinon.match.number, sinon.match.bool]);
		});
	});
});
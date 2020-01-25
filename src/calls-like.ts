import * as chai from 'chai';
import * as sinon from 'sinon';

export function callsLike(_chai: Chai.ChaiStatic, utils: Chai.ChaiUtils) {
	chai.Assertion.addMethod('callsLike', function fn(this: Chai.AssertionStatic, ...parameters: object[][]) {
		const stub: sinon.SinonStub = utils.flag(this, 'object');
		chai.expect(stub.callCount)
				.eq (parameters.length, `Expected ${
					stub.name
				} to have been called ${parameters.length} times but it was called ${
					stub.callCount
				} times\n`
			);
			for (let i = 0; i < parameters.length; i++) {
				(chai.expect(() => sinon.assert.match(
						stub.args[i],
						parameters[i]
				)).to.not.throw as Function)(undefined, /.+/,
					`Expected call #${i} of ${
						stub.name
					} to have been called with \n\x1b[32m[${
						JSON.stringify(parameters[i], undefined, ' ')
					}]\x1b[31m\n but it was called with\n[${
						JSON.stringify(stub.args[i], undefined, ' ')
					}]\n`
				);
		}

		return chai.expect(stub);
	});
}

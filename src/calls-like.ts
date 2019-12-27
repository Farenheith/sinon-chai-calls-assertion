import * as chai from 'chai';
import * as sinon from 'sinon';

export default (_chai, utils) => {
	chai.Assertion.addMethod('callsLike', function fn(...parameters: any[][]) {
		const stub: sinon.SinonStub = utils.flag(this, 'object');
			if (stub.callCount === undefined) {
				stub.callCount = 0;
			}
			const assertion = chai.expect(stub.callCount)
				.eq (parameters.length, `Expected ${
					stub.name
				} to have been called ${parameters.length} times but it was called ${
					stub.callCount
				} times\n`
			);
			for (let i = 0; i < parameters.length; i++) {
				try {
					sinon.assert.match(
						stub.args[i] as any,
						parameters[i]);
				} catch (error) {
					error.name = 'MatchAssertionError';
					error.message = `Expected call #${i} of ${
						stub.name} to have been called with \n[${
						parameters[i]}] but it was called with\n[${
						stub.args[i]}]\n`;
					throw error;
				}
		}
	
		return assertion;
	});
}

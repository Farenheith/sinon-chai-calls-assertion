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
				(chai.expect(() => {
					const lengthActual = stub.args[i].length;
					const lengthExpected = parameters[i].length;
					if (lengthActual !== lengthExpected) {
						throw new Error(`Expected call #${i} of ${
							stub.name
						} to have been called with ${lengthExpected
						} parameters but it was called with ${lengthActual
						}`);
					}
					let paramErrors = '';
					for (let j = 0; j < lengthActual; j++) {
						if (stub.args[i][j] !== parameters[i][j]) {
							const actual = stub.args[i];
							const expected = parameters[i];
							try {
								sinon.assert.match(
									actual,
									expected
								)
							} catch {
								paramErrors += `param ${j} as \n\x1b[32m${
									JSON.stringify(expected)
								}\x1b[31m\n but it was \n\x1b[32m${
									JSON.stringify(actual)
								}\n`;
							}
						}
					}
					if (paramErrors !== '') {
						throw new Error(`Expected call #${i} of ${
							stub.name
						} to have \n${paramErrors}`);
					}
				}).to.not.throw as Function)(undefined, /.+/,
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

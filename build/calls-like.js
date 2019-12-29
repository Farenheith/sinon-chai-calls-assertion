"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const sinon = require("sinon");
function callsLike(_chai, utils) {
    chai.Assertion.addMethod('callsLike', function fn(...parameters) {
        const stub = utils.flag(this, 'object');
        chai.expect(stub.callCount)
            .eq(parameters.length, `Expected ${stub.name} to have been called ${parameters.length} times but it was called ${stub.callCount} times\n`);
        for (let i = 0; i < parameters.length; i++) {
            chai.expect(() => sinon.assert.match(stub.args[i], parameters[i])).to.not.throw(undefined, /.+/, `Expected call #${i} of ${stub.name} to have been called with \n\x1b[32m[${JSON.stringify(parameters[i], undefined, ' ')}]\x1b[31m\n but it was called with\n[${JSON.stringify(stub.args[i], undefined, ' ')}]\n`);
        }
        return chai.expect(stub);
    });
}
exports.callsLike = callsLike;
//# sourceMappingURL=calls-like.js.map
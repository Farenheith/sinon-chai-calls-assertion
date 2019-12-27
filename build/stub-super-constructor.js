"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const sinon = require("sinon");
let cleanups = undefined;
mocha_1.beforeEach(() => {
    cleanups = [];
});
mocha_1.afterEach(() => {
    for (const cleanup of cleanups) {
        cleanup();
    }
    cleanups = undefined;
});
function stubSuperConstructor(cls) {
    if (cleanups === undefined) {
        throw new Error("Can't use that here: put it in a beforEach or it clause");
    }
    const prototypeBackup = Object.getPrototypeOf(cls);
    if (!prototypeBackup || prototypeBackup.name === '') {
        throw new Error('Object has no super prototype');
    }
    const stub = sinon.stub();
    Object.setPrototypeOf(cls, stub);
    cleanups.push(() => Object.setPrototypeOf(cls, prototypeBackup));
    return stub;
}
exports.stubSuperConstructor = stubSuperConstructor;
//# sourceMappingURL=stub-super-constructor.js.map
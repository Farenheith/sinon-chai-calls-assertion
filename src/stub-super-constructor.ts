import * as sinon from 'sinon';

let cleanups: Function[] | undefined = undefined;

beforeEach(() => {
  cleanups = [];
});

afterEach(() => {
  for (const cleanup of cleanups!) {
    cleanup();
  }
  cleanups = undefined;
});

export function stubSuperConstructor<T>(cls: T) {
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

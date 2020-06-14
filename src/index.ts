declare global {
  export namespace Chai {
    interface Assertion {
      callsLike(...parameters: unknown[][]): Assertion;
      callsLikeRef(...parameters: unknown[][]): Assertion;
    }
  }
}

export { callsLike } from './lib/calls-like';
export { stubSuperConstructor } from './lib/stub-super-constructor';
export { match } from 'sinon';

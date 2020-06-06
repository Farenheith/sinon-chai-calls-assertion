declare global {
  export namespace Chai {
    interface Assertion {
      callsLike(...parameters: unknown[][]): Assertion;
      callsLikeExactly(...parameters: unknown[][]): Assertion;
    }
  }
}

export { callsLike } from './calls-like';
export { stubSuperConstructor } from './stub-super-constructor';

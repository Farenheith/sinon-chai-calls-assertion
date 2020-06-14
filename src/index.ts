declare global {
  export namespace Chai {
    interface Assertion {
      /**
       * Check if a certain stub was called with the combination of types informed, in the exact order and same call count
       * @param parameters Combination of parameters. Each array is a different call
       */
      callsLike(...parameters: unknown[][]): Assertion;
      /**
       * Check if a certain stub was called with the combination of types informed with reference match, in the exact order and same call count
       * @param parameters Combination of parameters. Each array is a different call
       */
      callsLikeRef(...parameters: unknown[][]): Assertion;
      /**
       * Check if a certain stub was called with the combination of types informed, no matter the order
       * @param parameters Combination of parameters. Each array is a different call
       */
      someCallsLike(...parameters: unknown[][]): Assertion;
      /**
       * Check if a certain stub was called with the combination of types informed with reference match, no matter the order
       * @param parameters Combination of parameters. Each array is a different call
       */
      someCallsLikeRef(...parameters: unknown[][]): Assertion;
    }
  }
}

export { callsLike } from './lib/calls-like';
export { stubSuperConstructor } from './lib/stub-super-constructor';
export { match } from 'sinon';

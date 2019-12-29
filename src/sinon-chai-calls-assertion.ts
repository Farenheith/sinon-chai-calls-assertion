import 'chai';

declare global {

    export namespace Chai {
        interface Assertion {
            /**
             * true if the spy was called at least once.
             */
			callsLike(...parameters: unknown[][]): Assertion;
		}
	}
}
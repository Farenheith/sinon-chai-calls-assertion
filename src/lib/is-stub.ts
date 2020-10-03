import { SinonStub } from 'sinon';

export function isStub(actualCall: SinonStub<any[], any>) {
  if (actualCall?.args?.length === undefined) {
    throw new Error(`Not a stub! ${actualCall}`);
  }
}

import 'reflect-metadata';
import { restore } from 'sinon';
import sinonChai = require('sinon-chai');
import { use } from 'chai';
use(sinonChai);

beforeEach(() => {
  restore();
});

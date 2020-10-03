import { expect } from 'chai';
describe('like', () => {
  it('should throw error on deep inequality', () => {
    let error: any;
    try {
      expect([[[1]]]).to.be.like([[[2]]]);
    } catch (err) {
      error = err;
    }

    expect(error).to.exist;
  });

  it('should not fail when value is deep equal', () => {
    expect([[[1]]]).to.be.like([[[1]]]);
  });
});

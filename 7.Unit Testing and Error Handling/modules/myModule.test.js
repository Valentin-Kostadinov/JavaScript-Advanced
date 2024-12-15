let sum;
let expect;

before(async () => {
    const module = await import('./myModule.js');
    sum = module.sum;

    const chai = await import('chai');
    expect = chai.expect;
});

describe('Sum function', () => {
    it('works', () => {
        expect(sum(1, 2)).to.equal(3);
    });

    it('fails with invalid values', () => {
        expect(sum('a', 'a')).to.be.NaN;
    });
});
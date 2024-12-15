before(async () => {
    const chaiModule = await import('chai');
    expect = chaiModule.expect;

    const isSymmetricModule = await import('./isSymmetric.js');
    isSymmetric = isSymmetricModule.default;
});

describe('isSymmetric', () => {
    it('returns true for valid symmetric inputs', () => {
        expect(isSymmetric([1,1])).to.be.true;
    });

    it('return false for valid symmetric inputs', () => {
        expect(isSymmetric([1,2])).to.be.false;
    });

    it('return false for invalid argument', () => {
        expect(isSymmetric('a')).to.be.false;
    });

    it('return false for type elements', () => {
        expect(isSymmetric(['1', 1])).to.be.false;
    });

    // test overloading

    it('returns true for valid symmetric odd-element array', () => {
        expect(isSymmetric([1,1,1])).to.be.true;
    });

    it('returns true for valid symmetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.be.true;
    });

    it('returns false for valid non-symmetric array', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false;
    });
});
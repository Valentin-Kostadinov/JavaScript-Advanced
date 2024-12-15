before(async () => {
    const chaiModule = await import('chai');
    expect = chaiModule.expect;

    const RGBtoHEXModule = await import('./RGBtoHEX.js');
    RGBtoHEX = RGBtoHEXModule.default;
});

describe('RGBtoHEX', () => {
    it('converts black to hex', () => {
        expect(RGBtoHEX(0,0,0)).to.equal('#000000');
    });

    it('converts white to hex', () => {
        expect(RGBtoHEX(255,255,255)).to.equal('#FFFFFF');
    });

    it('converts red to hex', () => {
        expect(RGBtoHEX(255,0,0)).to.equal('#FF0000');
    });

    it('converts green to hex', () => {
        expect(RGBtoHEX(0,255,0)).to.equal('#00FF00');
    });

    it('converts blue to hex', () => {
        expect(RGBtoHEX(0,0,255)).to.equal('#0000FF');
    });

    it('returns undefined for string params', () => {
        expect(RGBtoHEX('a','a','a')).to.be.undefined;
    });
    
    it('returns undefined for negative values', () => {
        expect(RGBtoHEX(256, 0, 0)).to.be.undefined;
    });

    it('returns undefined for values > 255', () => {
        expect(RGBtoHEX(-1, 0, 0)).to.be.undefined;
    });

    // test overloading
    it('converts 151, 104, 172 to hex', () => {
        expect(RGBtoHEX(151,104,172)).to.equal('#9768AC');
    });
});
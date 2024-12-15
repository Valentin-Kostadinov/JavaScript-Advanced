before(async () => {
    const chaiModule = await import('chai');
    expect = chaiModule.expect;

    const mathEnforcerModule = await import('./functionality.js');
    mathEnforcer = mathEnforcerModule.default;
});

describe('mathEnforcer()', () => {

    let actualResult;
    let expectedResult;

    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
    })

    describe('addFive()', () => {
        it('with invalid argument', () => {
            actualResult = mathEnforcer.addFive([1,2,3,5]);
            expectedResult = undefined;

            expect(actualResult).to.be.equal(expectedResult);
        });

        it('with valid argument', () => {
            actualResult = mathEnforcer.addFive(9);
            expectedResult = 14;

            expect(actualResult).to.be.equal(expectedResult);
        });

        it('with negative argument', () => {
            actualResult = mathEnforcer.addFive(-10);
            expectedResult = -5;

            expect(actualResult).to.be.equal(expectedResult);
        });

        it('with floating point number', () => {
            actualResult = mathEnforcer.addFive(15.5);
            expectedResult = 20.5;

            expect(actualResult).to.be.equal(expectedResult);
        });
        it('with negative floating point number', () => {
            actualResult = mathEnforcer.addFive(-15.5);
            expectedResult = -10.5;

            expect(actualResult).to.be.equal(expectedResult);
        });
    });

    describe('subtractTen()', () => {
        it('with invalid argument', () => {
            actualResult = mathEnforcer.subtractTen({key: 'value'});
            expectedResult = undefined;

            expect(actualResult).to.be.equal(expectedResult);
        });

        it('with valid argument', () => {
            actualResult = mathEnforcer.subtractTen(14);
            expectedResult = 4;

            expect(actualResult).to.be.equal(expectedResult);
        });

        it('with negative argument', () => {
            actualResult = mathEnforcer.subtractTen(-14);
            expectedResult = -24;

            expect(actualResult).to.be.equal(expectedResult);
        });

        it('with floating point argument', () => {
            actualResult = mathEnforcer.subtractTen(15.9);
            expectedResult = 5.9;

            expect(actualResult).to.be.equal(expectedResult);
        });
    });

    describe('sum()', () => {
        it('with invalid (first argument)', () => {
            actualResult = mathEnforcer.sum('123', 9);
            expectedResult = undefined;

            expect(actualResult).to.be.equal(expectedResult);
        });

        it('with invalid (second argument)', () => {
            actualResult = mathEnforcer.sum(19, ['123', '234']);
            expectedResult = undefined;

            expect(actualResult).to.be.equal(expectedResult);
        });

        it('with valid arguments', () => {
            actualResult = mathEnforcer.sum(100, 9);
            expectedResult = 109;

            expect(actualResult).to.be.equal(expectedResult);
        });

        it('with negative arguments', () => {
            actualResult = mathEnforcer.sum(100, -50);
            expectedResult = 50;

            expect(actualResult).to.be.equal(expectedResult);
        });

        it('with floating point arguments', () => {
            actualResult = mathEnforcer.sum(100, 50.9);
            expectedResult = 150.9;

            expect(actualResult).to.be.equal(expectedResult);
        });

        it('with negative floating point arguments', () => {
            actualResult = mathEnforcer.sum(10.5, -50);
            expectedResult = -39.5;

            expect(actualResult).to.be.equal(expectedResult);
        });
    });
})
const {sum, div, multi,sub, date2000} = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
});

test('adds 1 + 1 to equal 2', () => {
    expect(sum(1, 1)).toBe(2);
});

test('2 / 1 to equal 2', () => {
    expect(div(2, 1)).toBe(2);
});

test(' 2 * 3 to equal 6', () => {
    expect(multi(2, 3)).toBe(6);
});

test(' 1 - 1 to equal 0', () => {
    expect(sub(1, 1)).toBe(0);
});

describe('date2000', () => {
    let originalDataNow = Date.now;

    beforeEach(() => {
        Date.now = () => new Date("2000-01-01T00:10:00").getTime()
    });

    afterEach(() => {
        Date.now = originalDataNow;
    });

    test('date2000', () => {
        expect(date2000()).toBe(600);
    });
});
const solution = require('./increaseNumberRoundness.js');

test('test 1', () => {
    expect(solution(902200100)).toBe(true);
});

test('test 2', () => {
    expect(solution(11000)).toBe(false);
});

test('test 3', () => {
    expect(solution(99080)).toBe(true);
});

test('test 4', () => {
    expect(solution(1022220)).toBe(true);
});

test('test 5', () => {
    expect(solution(106611)).toBe(true);
});

test('test 6', () => {
    expect(solution(234230)).toBe(false);
});

test('test 7', () => {
    expect(solution(888)).toBe(false);
});

test('test 8', () => {
    expect(solution(100)).toBe(false);
});

test('test 9', () => {
    expect(solution(1000000000)).toBe(false);
});

test('test 10', () => {
    expect(solution(103456789)).toBe(true);
});

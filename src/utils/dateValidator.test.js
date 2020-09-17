import dateValidator from './dateValidator';


test('returns false for a non date input', () => {
    const result = dateValidator('abcd');
    expect(result).toBe(false);
});

test('returns false for an old date', () => {
    const result = dateValidator('1899');
    expect(result).toBe(false);
})

test('returns false for a future date', () => {
    const result = dateValidator('2021');
    expect(result).toBe(false);
})

test('returns true for a valid date', () => {
    const result = dateValidator('1990-1-2');
    expect(result).toBe(true);
})

test('return true for today', () => {
    const result = dateValidator('2020-09-16');
    expect(result).toBe(true);
})
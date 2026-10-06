const fibonacci_sequence = require('../src/fibonacci_sequence');

test('it give some numbers', () => {
    expect(fibonacci_sequence()).toEqual("HELLO");
});
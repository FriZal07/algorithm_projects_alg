const fibonacci_recursive = require('../src/fibonacci_sequence');
const fibonacci_sequence = require('../src/fibonacci_sequence');

test('This passed fibonacci recursive test', () => {
    expect(fibonacci_recursive(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test('This passed fibonacci loop sequence test', () => {
    expect(fibonacci_sequence(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
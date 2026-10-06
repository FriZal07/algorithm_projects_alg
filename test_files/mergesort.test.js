const mergesort = require('../src/mergesort');

test('This passed the merge sort', () => {
    expect(mergesort([])).toEqual([]);
    expect(mergesort([73])).toEqual([73]);
    expect(mergesort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(mergesort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(mergesort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
});
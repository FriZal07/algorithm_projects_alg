const sortedTree = require('../src/binarytree');

describe('Tree includes(value) method', () => {
    let tree;

    beforeEach(() => {
        tree = new sortedTree([5, 10, 15, 20, 25]);
        tree2 = new sortedTree([1,2, 3]);
    });

    test('returns true when the target value exists in the tree', () => {
        expect(tree.includes(15)).toBe(true);
        expect(tree.includes(5)).toBe(true);
        expect(tree.includes(25)).toBe(true);
    });

    test('returns false when the target value is absent from the tree', () => {
        expect(tree.includes(99)).toBe(false);
        expect(tree.includes(0)).toBe(false);
    });

    test('does nothing when the value already exists', () => {
        // Assuming beforeEach uses: const inputArr = [5, 10, 15, 20, 25];

        tree2.insert(6);

        expect(tree2.includes(6)).toBe(true);

        expect(tree2.mainroot.root).toBe(2);
        expect(tree2.mainroot.left.root).toBe(1); // Or 10, depending on your exact slice logic for evens/odds
        expect(tree2.mainroot.right.root).toBe(3);

        tree2.insert(4);

        expect(tree2.mainroot.right.right.left.root).toBe(4);
    });


});

test('successfully deletes nodes with 0, 1, and 2 children iteratively', () => {
    const tree = new sortedTree([]);

    tree.insert(50);
    tree.insert(30);
    tree.insert(70);
    tree.insert(20);
    tree.insert(40);
    tree.insert(35);
    tree.insert(60);
    tree.insert(80);

    tree.deleteItem(20);

    expect(tree.mainroot.left.root).toBe(30);
    expect(tree.mainroot.left.left).toBe(null);

    tree.deleteItem(40);

    expect(tree.mainroot.left.right.root).toBe(35);
    expect(tree.mainroot.left.right.left).toBe(null);
    expect(tree.mainroot.left.right.right).toBe(null);

    tree.deleteItem(50);

    expect(tree.mainroot.root).toBe(60);
    expect(tree.mainroot.right.root).toBe(70);
    expect(tree.mainroot.right.left).toBe(null);
    expect(tree.mainroot.right.right.root).toBe(80);
});
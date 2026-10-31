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

        expect(tree2.mainroot.value).toBe(2);
        expect(tree2.mainroot.left.value).toBe(1); // Or 10, depending on your exact slice logic for evens/odds
        expect(tree2.mainroot.right.value).toBe(3);

        tree2.insert(4);

        expect(tree2.mainroot.right.right.left.value).toBe(4);
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

    expect(tree.mainroot.left.value).toBe(30);
    expect(tree.mainroot.left.left).toBe(null);

    tree.deleteItem(40);

    expect(tree.mainroot.left.right.value).toBe(35);
    expect(tree.mainroot.left.right.left).toBe(null);
    expect(tree.mainroot.left.right.right).toBe(null);

    tree.deleteItem(50);

    expect(tree.mainroot.value).toBe(60);
    expect(tree.mainroot.right.value).toBe(70);
    expect(tree.mainroot.right.left).toBe(null);
    expect(tree.mainroot.right.right.value).toBe(80);
});


test('levelOrderForEach traverses the tree in breadth-first order', () => {
    const tree = new sortedTree([]); 

    tree.insert(50); 
    tree.insert(30); 
    tree.insert(70); 
    tree.insert(20); 
    tree.insert(40); 
    tree.insert(60); 
    tree.insert(80); 

    // Create an array to capture the values as the callback processes them
    const result = [];

    // Run the traversal. The callback receives the node value and pushes it to result.
    tree.levelOrderForEach((val) => {
        result.push(val);
    });

    // Verify the values were traversed in the exact level-by-level order
    expect(result).toEqual([50, 30, 70, 20, 40, 60, 80]);

    // Verify that calling it without a callback throws your specific error
    expect(() => tree.levelOrderForEach()).toThrow("A call is required");
});


describe('Depth-First Search Traversals', () => {
    let tree;

    beforeEach(() => {
        tree = new sortedTree([]); //[cite: 11]
        // Populating the exact same tree structure compactly
        [50, 30, 70, 20, 40, 60, 80].forEach(val => tree.insert(val));
    });

    test('preOrderForEach traverses the tree in Root-Left-Right order', () => {
        const result = [];

        tree.preOrderForEach((val) => {
            result.push(val); 
        });

        expect(result).toEqual([50, 30, 20, 40, 70, 60, 80]);
        expect(() => tree.preOrderForEach()).toThrow("A call is required"); 
    });

    test('inOrderForEach traverses the tree in Left-Root-Right order', () => {
        const result = [];

        tree.inOrderForEach((val) => {
            result.push(val);
        });

        expect(result).toEqual([20, 30, 40, 50, 60, 70, 80]);
        expect(() => tree.inOrderForEach()).toThrow("A call is required");
    });

    test('postOrderForEach traverses the tree in Left-Right-Root order', () => {
        const result = [];

        tree.postOrderForEach((val) => {
            result.push(val);
        });

        expect(result).toEqual([20, 40, 30, 60, 80, 70, 50]);
        expect(() => tree.postOrderForEach()).toThrow("A call is required");
    });

    test('depth(value) calculates edges from the root down to the target node', () => {
        // The root itself is 0 edges away from the root
        expect(tree.depth(50)).toBe(0);
        // Middle nodes are 1 edge down
        expect(tree.depth(30)).toBe(1);
        expect(tree.depth(70)).toBe(1);
        // Leaves are 2 edges down
        expect(tree.depth(20)).toBe(2);
        expect(tree.depth(80)).toBe(2);
        // Missing nodes should return undefined
        expect(tree.depth(999)).toBeUndefined();
    });

    test('height(value) calculates edges from the target node down to its deepest leaf', () => {
        // Leaves have no nodes below them, so their height is 0
        expect(tree.height(20)).toBe(0);
        expect(tree.height(80)).toBe(0);
        // Middle nodes are 1 edge above the leaves
        expect(tree.height(30)).toBe(1);
        expect(tree.height(70)).toBe(1);
        // The root is 2 edges above the deepest leaves
        expect(tree.height(50)).toBe(2);
        // Missing nodes should return undefined
        expect(tree.height(999)).toBeUndefined();
    });
});


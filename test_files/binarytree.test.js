const sortedTree = require('../src/binarytree');

describe('Tree Stress Tests', () => {
    test('builds a perfectly balanced tree from 127 elements', () => {
        // 1. Generate array of 127 elements: [1, 2, 3, ..., 127]
        const size = 127;
        const inputArr = Array.from({ length: size }, (_, i) => i + 1);

        // 2. Build the tree
        const tree = new sortedTree(inputArr);
        const root = tree.buildTree(inputArr);

        // 3. Jest assertions
        expect(root).not.toBeNull();
        expect(root).not.toBeUndefined();

        // Check the exact root (median of 127 elements is element 64 at index 63)
        expect(root.root).toBe(64);

        // Helper to check tree height
        function getHeight(node) {
            if (!node) return 0;
            return 1 + Math.max(getHeight(node.left), getHeight(node.right));
        }

        // Helper to count total nodes
        function countNodes(node) {
            if (!node) return 0;
            return 1 + countNodes(node.left) + countNodes(node.right);
        }

        // Perfect binary tree of 127 nodes MUST have a height of 7 and exactly 127 nodes
        expect(getHeight(root)).toBe(7);
        expect(countNodes(root)).toBe(127);
    });
});
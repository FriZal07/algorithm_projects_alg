const LinkedList = require('../src/linked_lists');

describe('linkedList', ()=> {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    describe('Empty List Tests', () => {
        test('head() returns undefined when empty', ()=>{
            expect(list.head()).toBeUndefined();
        });
    });

    describe('Populating List Tests',  () => {
        beforeEach(() => {
            list.append('A');
            list.append('B');
            list.append('C');
        });

        test('at index 1, it returns correct value',()=>{
            expect(list.at(1)).toBe('B');
        });

        test('contains(value) returns true if value exists', () => {
            expect(list.contains('B')).toBe(true);
        });

        test('contains(value) returns false if value does not exist', () => {
            expect(list.contains('Z')).toBe(false);
        });

        test('findIndex(value) returns index of existing value', () => {
            expect(list.findIndex('C')).toBe(2);
        });

        test('findIndex(value) returns -1 for missing value', () => {
            expect(list.findIndex('Z')).toBe(-1);
        });

        test('findIndex(value) returns first match if duplicates exist', () => {
            list.append('B');
            expect(list.findIndex('B')).toBe(1);
        });

    });

    describe('Removal & Formatting', () => {
        beforeEach(() => {
            list.append('A');
            list.append('B');
            list.append('C');
        });

        test('pop() removes the final node and returns its value', () => {
            const removedValue = list.pop();
            expect(removedValue).toBe('C');
            expect(list.tail()).toBe('B');
            expect(list.size()).toBe(2);
        });

        test('toString() formats list correctly', () => {
            expect(list.toString()).toBe('( A ) > ( B ) > ( C ) > null');
        });
    });

});

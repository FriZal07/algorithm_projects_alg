const Hashmap = require('../src/hashmap');

describe('Inserting sets', () => {

    let testA;
    
    beforeEach(() => {
        testA = new Hashmap();
        testA.set('apple', 'red');
        testA.set('banana', 'yellow')
        testA.set('carrot', 'orange')
        testA.set('frog', 'green')
        testA.set('grape', 'purple')
        testA.set('hat', 'black')
        testA.set('ice cream', 'white')
        testA.set('jacket', 'blue')
        testA.set('kite', 'pink')
        testA.set('lion', 'golden')
        testA.set('dog', 'brown')
        testA.set('elephant', 'gray')
        testA.set('frog', 'green')
        testA.set('grape', 'purple')
        testA.set('hat', 'black')
        testA.set('ice cream', 'white')
        testA.set('jacket', 'blue')
        testA.set('kite', 'pink')
        testA.set('lion', 'golden')
    });

    test('Getting the key', () => {
        expect(testA.get('apple')).toEqual("red");
        expect(testA.get('elephant')).toEqual("gray");
        expect(testA.get('lion')).toEqual("golden");
    });

    test('Checking has', () => {
        expect(testA.has('apple')).toEqual(true);
        expect(testA.has('banananaa')).toEqual(false);
    });

});

describe('Adding for extra load', ()=>{

    let testA;

    beforeEach(() => {
        testA = new Hashmap();
        testA.set('apple', 'red');
        testA.set('banana', 'yellow')
        testA.set('carrot', 'orange')
        testA.set('frog', 'green')
        testA.set('grape', 'purple')
        testA.set('hat', 'black')
        testA.set('ice cream', 'white')
        testA.set('jacket', 'blue')
        testA.set('kite', 'pink')
        testA.set('lion', 'golden')
        testA.set('dog', 'brown')
        testA.set('elephant', 'gray')
        testA.set('frog', 'green')
        testA.set('grape', 'purple')
        testA.set('hat', 'black')
        testA.set('ice cream', 'white')
        testA.set('jacket', 'blue')
        testA.set('kite', 'pink')
        testA.set('lion', 'golden')
        testA.set('moon', 'silver')
    });

    test('Getting the key', () => {
        expect(testA.get('apple')).toEqual("red");
        expect(testA.get('elephant')).toEqual("gray");
        expect(testA.get('moon')).toEqual("silver");
    });

    test('Checking has', () => {
        expect(testA.has('apple')).toEqual(true);
        expect(testA.has('banananaa')).toEqual(false);
    });

})
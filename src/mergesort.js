module.exports = mergesort;

function mergesort(array){
    if (array.length <= 1){
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const resolvedleft = mergesort(array.slice(0, mid));
    const resolvedright = mergesort(array.slice(mid));

    const results = []
    top_pointer = 0;
    bottom_pointer = 0;

    while(top_pointer < resolvedleft.length && bottom_pointer <resolvedright.length){
        if (resolvedleft[top_pointer] > resolvedright[bottom_pointer]) {
            results.push(resolvedright[bottom_pointer]);
            bottom_pointer++;
        } else if (resolvedleft[top_pointer] < resolvedright[bottom_pointer]){
            results.push(resolvedleft[top_pointer]);
            top_pointer++;
        } else{
            results.push(resolvedleft[top_pointer],resolvedright[bottom_pointer])
            top_pointer++;
            bottom_pointer++;
        }
    }

    return results.concat(resolvedleft.slice(top_pointer), resolvedright.slice(bottom_pointer));
}
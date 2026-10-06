module.exports = fibonacci_recursive;
module.exports = fibonacci_sequence;

function fibonacci_sequence(nums){
    if (nums == 0){
        return [];
    }
    else if(nums == 1){
        return [0];
    }
    else if(nums == 2){
        return [0,1];
    }
    else{
        let array = [0,1];

        for (let index = 0; index < nums - 2; index++) {
            array.push( array[index] + array[index + 1]);
        }
        
        return array;
    }
}


function fibonacci_recursive( nums, array = [0,1]) {
    if (nums == 0) {
        return [];
    }
    else if (nums == 1) {
        return [0];
    }
    else if (nums == 2) {
        return [0, 1];
    }
    else {
        if  (array.length < nums){
            array.push(array[array.length - 1] + array[array.length - 2]);
            return fibonacci_recursive(nums, array);
        } else{
            return array;
        }
    }
}
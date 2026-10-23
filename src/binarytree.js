class Node{
    root = null;
    left = null;
    right = null;
}

class Tree{

    constructor(array){
        this.root = this.buildTree(array);
    }

    buildTree(array){
        let arraylength_c = array.length;
        let arrayindexlength_c = array.length - 1;

        let newNode = new Node;

        if (arraylength_c == 0) return null;
        if (arraylength_c == 1){
            newNode.root = array[0];
            return newNode;
        }
        if (arraylength_c == 2){
            newNode.root = array[1];
            newNode.left = array[0];
            return newNode;
        }

        let root = array[~~(arrayindexlength_c /2)];
        let leftarray = array.slice(0, ~~(arrayindexlength_c / 2));
        let rightarray = array.slice(~~(arrayindexlength_c / 2) + 1, arraylength_c);

        newNode.root = root;
        newNode.left = this.buildTree(leftarray);
        newNode.right = this.buildTree(rightarray);

        return newNode;
    }

    includes(value){

    }

    insert(value){

    }

    deleteItem(value){

    }

    levelOrderForEach(callback){

    }

    inOrderforEach(callback){

    }

    preOrderForEach(callback){

    }

    postOrderForEach(callback){

    }

    height(value){

    }

    depth(value){

    }

    isBalanced(){

    }

    rebalance(){
        
    }

}

module.exports = Tree;

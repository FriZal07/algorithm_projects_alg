class Node{
    root = null;
    left = null;
    right = null;
}

class Tree{

    constructor(array){
        this.mainroot = this.buildTree(array);
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

            let leftchild = new Node();
            leftchild.root = array[0];

            newNode.left = leftchild;
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

    includes(value, pointer = this.mainroot){

        if (pointer == null) {
            return false;
        }

        if (pointer.root == value){
            return true;
        } else if(value > pointer.root){
            pointer = pointer.right;
            return this.includes(value, pointer);
        } else if(value < pointer.root){
            pointer = pointer.left;
            return this.includes(value,pointer);
        } 
    }

    insert(value, pointer = this.mainroot){
        if (pointer == null){
            let newNode = new Node;
            newNode.root = value;
            this.mainroot = newNode;
            return;
        }

        if (pointer.root == value) {
            return;
        } else if (value > pointer.root) {
            if (pointer.right == null){
                let newNode = new Node;
                newNode.root = value;
                pointer.right = newNode;
                return;
            }
            return this.insert(value, pointer.right);
        } else if (value < pointer.root) {
            if (pointer.left == null) {
                let newNode = new Node;
                newNode.root = value;
                pointer.left = newNode;
                return;
            }
            return this.insert(value, pointer.left);
        } 
    }

    deleteItem(value, pointer = this.mainroot) {
        let parent = null;
        let current = pointer;

        while (current != null && current.root != value) {
            parent = current;
            if (value < current.root) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        if (current == null) {
            return;
        }

        if (current.left != null && current.right != null) {
            let successorparent = current;
            let successor = current.right;

            while (successor.left != null) {
                successorparent = successor;
                successor = successor.left;
            }

            current.root = successor.root;

            if (successorparent === current) {
                successorparent.right = successor.right;
            } else {
                successorparent.left = successor.right;
            }

            return;
        }

        let child;

        if (current.left != null) {
            child = current.left;
        } else {
            child = current.right;
        }

        if (parent == null) {
            this.mainroot = child;
        } else if (parent.left === current) {
            parent.left = child;
        } else {
            parent.right = child;
        }
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

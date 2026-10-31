class Node{
    value = null;
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
            newNode.value = array[0];
            return newNode;
        }
        if (arraylength_c == 2){
            newNode.value = array[1];

            let leftchild = new Node();
            leftchild.value = array[0];

            newNode.left = leftchild;
            return newNode;
        }

        let value = array[~~(arrayindexlength_c /2)];
        let leftarray = array.slice(0, ~~(arrayindexlength_c / 2));
        let rightarray = array.slice(~~(arrayindexlength_c / 2) + 1, arraylength_c);

        newNode.value = value;
        newNode.left = this.buildTree(leftarray);
        newNode.right = this.buildTree(rightarray);

        return newNode;
    }

    includes(value, pointer = this.mainroot){

        if (pointer == null) {
            return false;
        }

        if (pointer.value == value){
            return true;
        } else if(value > pointer.value){
            pointer = pointer.right;
            return this.includes(value, pointer);
        } else if(value < pointer.value){
            pointer = pointer.left;
            return this.includes(value,pointer);
        } 
    }

    insert(value, pointer = this.mainroot){
        if (pointer == null){
            let newNode = new Node;
            newNode.value = value;
            this.mainroot = newNode;
            return;
        }

        if (pointer.value == value) {
            return;
        } else if (value > pointer.value) {
            if (pointer.right == null){
                let newNode = new Node;
                newNode.value = value;
                pointer.right = newNode;
                return;
            }
            return this.insert(value, pointer.right);
        } else if (value < pointer.value) {
            if (pointer.left == null) {
                let newNode = new Node;
                newNode.value = value;
                pointer.left = newNode;
                return;
            }
            return this.insert(value, pointer.left);
        } 
    }

    deleteItem(value, pointer = this.mainroot) {
        let parent = null;
        let current = pointer;

        while (current != null && current.value != value) {
            parent = current;
            if (value < current.value) {
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

            current.value = successor.value;

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
        if (!callback) throw new Error("A call is required");
        if (this.mainroot === null) return;

        let index_level_count = 0;
        let full_tree = [[this.mainroot]];

        function traversalLevel(){
            let temp_array = []
            full_tree[index_level_count].forEach(curr_root => {
                callback(curr_root.value);
                if (curr_root.left) {
                    temp_array.push(curr_root.left);
                }
                if (curr_root.right) {
                    temp_array.push(curr_root.right);
                } 
            });
            if (temp_array.length === 0){
                return;
            } else{
                index_level_count++;
                full_tree.push(temp_array);
                traversalLevel();
            }
        }

        traversalLevel();
    }

    inOrderForEach(callback){
        if (!callback) throw new Error("A call is required");
        if (this.mainroot === null) return;

        function intraversalLevel(current_root) {
            if (current_root.left !== null) {
                intraversalLevel(current_root.left);
            }
            callback(current_root.value);
            if (current_root.right !== null) {
                intraversalLevel(current_root.right);
            }
        }

        intraversalLevel(this.mainroot);
    }

    preOrderForEach(callback){
        if (!callback) throw new Error("A call is required");
        if (this.mainroot === null) return;

        function pretraversalLevel(current_root) {
            callback(current_root.value);
            if (current_root.left !== null){
                pretraversalLevel(current_root.left);
            }
            if (current_root.right !== null){
                pretraversalLevel(current_root.right);
            }
        }

        pretraversalLevel(this.mainroot);
    }

    postOrderForEach(callback){
        if (!callback) throw new Error("A call is required");
        if (this.mainroot === null) return;

        function posttraversalLevel(current_root) {
            if (current_root.left !== null) {
                posttraversalLevel(current_root.left);
            }
            if (current_root.right !== null) {
                posttraversalLevel(current_root.right);
            }
            callback(current_root.value);
        }

        posttraversalLevel(this.mainroot);
    }

    height(value){

        function findtarget(pointer){
            if (pointer == null) {
                return undefined;
            }

            if (pointer.value == value) {
                return pointer;
            } else if (value > pointer.value) {
                return findtarget(pointer.right);
            } else if (value < pointer.value) {
                return findtarget(pointer.left);
            }
        }

        const target_node = findtarget(this.mainroot);

        if (target_node === undefined){
            return undefined;
        }

        function calcHeight(node) {

            if (node === null) return -1;

            const leftHeight = calcHeight(node.left);
            const rightHeight = calcHeight(node.right);

            return Math.max(leftHeight, rightHeight) + 1;
        }

        return calcHeight(target_node);
        
    }

    depth(value){

        function finddepth(pointer, last_depth) {
            if (pointer == null) {
                return undefined;
            }

            if (pointer.value == value) {
                return last_depth;
            } else if (value > pointer.value) {
                return finddepth(pointer.right, last_depth + 1);
            } else if (value < pointer.value) {
                return finddepth(pointer.left, last_depth + 1);
            }
        }

        return finddepth(this.mainroot, 0);
    }

    isBalanced(){

    }

    rebalance(){
        
    }

}

module.exports = Tree;

class LinkedList {

    constructor() {
        this.count = 0;
        this.head_ref = null;
        this.tail_ref = null;
    }

    append(value){
        const newNode = new Node(value, null);
        if(this.count == 0){
            this.head_ref = newNode;
            this.tail_ref = newNode;

            this.count++;
        } else{
            this.tail_ref.nextNode = newNode;
            this.tail_ref = newNode;

            this.count++;
        }
    }

    prepend(value){
        if (this.count == 0) {
            const newNode = new Node(value, null);
            this.head_ref = newNode;
            this.tail_ref = newNode;

            this.count++;
        } else {
            const newNode = new Node(value, this.head_ref

            );
            this.head_ref = newNode;

            this.count++;
        }
    }    

    size() {
        return this.count;
    }

    head() {
        if (this.head_ref == null) return undefined;
        return this.head_ref.value;
    }

    tail() {
        if (this.tail_ref == null) return undefined;
        return this.tail_ref.value;
    }
    
    at(index){
        let temp = this.head_ref;
        let temp_index = 1
        
        while(temp_index <= index && temp !== null) {
            if (temp.nextNode == null) return undefined;
            temp = temp.nextNode;
            temp_index++;
        }

        return temp.value;
    }

    pop(){
        if (this.tail_ref == null) return undefined;
        else{
            let removedNode = this.tail_ref;

            if (this.count === 1) {
                this.head_ref = null;
                this.tail_ref = null;
                this.count = 0;
                return removedNode.value;
            }

            let temp = this.head_ref;

            while (temp.nextNode !== this.tail_ref) {
                temp = temp.nextNode;
            }

            temp.nextNode = null;
            this.tail_ref = temp;
            this.count--;

            return removedNode.value;
        }
    }

    contains(value){
        if (this.tail_ref == null) return false;
        else{
            let temp = this.head_ref;

            while (temp !== null) {
                if (temp.value == value){
                    return true;
                }
                temp = temp.nextNode;
            }

            return false;
        }
    }

    findIndex(value){
        if (this.tail_ref == null) return -1;
        else {
            let temp = this.head_ref;
            let index = 0;

            while (temp !== null) {
                if (temp.value == value) {
                    return index;
                }
                temp = temp.nextNode;
                index++;
            }

            return -1;
        }
    }

    toString(){
        let temp = this.head_ref;
        let outputstring = "";

        while (temp !== null) {
            outputstring += `( ${temp.value} ) > `;
            temp = temp.nextNode
        }

        outputstring += "null";
        return outputstring;
    }

}

class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

module.exports = LinkedList;
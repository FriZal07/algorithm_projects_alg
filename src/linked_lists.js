class LinkedList {

    constructor() {
        this.count = 0;
        this.head_ref
         = null;
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
        return this.head_ref;
    }

    tail() {
        return this.tail_ref;
    }
    
    at(index){
        let temp = this.head_ref;
        let current_index = 0
        
        while(current_index < index && temp !== null) {
            if (temp.head_ref == null) return undefined;
            temp = temp.head_ref;
            current_index++;
        }

        return temp;
    }

    pop(){
        
    }

    contains(value){

    }

    findIndex(value){

    }

    toString(){

    }

}

class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
class Hashmap {

    loadfactor = 0.75;

    buckets = new Array(this.capacity).fill(null);
    currentsize = 0;
    capacity = 16;

    loadcheck(){
        while (this.currentsize/this.capacity >= this.loadfactor){
            this.capacity++;
        }
    }

    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i< key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value){

        this.loadcheck();
        let bucketindex = this.hash(key) % this.capacity;
        let newHash = new Hash(key,value);

        if (this.buckets[bucketindex] === null){
            this.buckets[bucketindex] = newHash;
            this.currentsize++;
            return;
        } else {

            let temp = this.buckets[bucketindex];

            while(true){

                if (temp.key === key) {
                    temp.value = value;
                    return;
                }

                if (temp.nextNode === null){
                    temp.nextNode = newHash;
                    this.currentsize++;
                    return;
                }

                temp = temp.nextNode;
            }
        }
    }

    get(key){

        let bucketindex = this.hash(key) % this.capacity;
        if (this.buckets[bucketindex] === null){
            return undefined;
        } else{

            let temp = this.buckets[bucketindex];

            while(true){

                if(temp.key === key){
                    return temp.value;
                }

                if(temp.nextNode === null){
                    return undefined;
                }

                temp = temp.nextNode;

            }
        }
    }

    has(key){

        let bucketindex = this.hash(key) % this.capacity;
        if (this.buckets[bucketindex] === null) {
            return false;
        } else {

            let temp = this.buckets[bucketindex];

            while (true) {

                if (temp.key === key) {
                    return true;
                }

                if (temp.nextNode === null) {
                    return false;
                }

                temp = temp.nextNode;

            }
        }
    }

    remove(key){

        let bucketindex = this.hash(key) % this.capacity;
        if (this.buckets[bucketindex] === null){
            return false;
        } else{

            let temp = this.buckets[bucketindex];
            let prevtemp = null;

            while (true) {

                if (temp.key === key) {
                    if (prevtemp === null){
                        this.buckets[bucketindex] = temp.nextNode;
                    } else{
                        prevtemp.nextNode = temp.nextNode;
                    }
                    this.currentsize--;
                    return true;
                }

                if (temp.nextNode === null) {
                    return false;
                }

                prevtemp = temp;
                temp = temp.nextNode;
            }
        }
    }

    length(){
        return this.currentsize;
    }

    clear(){
        this.buckets = new Array(this.capacity).fill(null);
        this.currentsize = 0;
    }

    keys(){
        let allKeys = [];

        this.buckets.forEach(bucket => {
            if (bucket !== null) {

                let temp = bucket;

                while (temp !== null) {
                    allKeys.push(temp.key);
                    temp = temp.nextNode;
                }
            }
        });

        return allKeys;
    }

    value(){
        let allValues = [];

        this.buckets.forEach(bucket => {
            if (bucket !== null) {

                let temp = bucket;

                while (temp !== null) {
                    allValues.push(temp.value);
                    temp = temp.nextNode;
                }
            }
        });

        return allValues;
    }

    entries(){
        let allEntries = [];

        this.buckets.forEach(bucket => {
            if (bucket !== null) {

                let temp = bucket;

                while (temp !== null) {
                    allEntries.push([temp.key, temp.value]);
                    temp = temp.nextNode;
                }
            }
        });

        return allEntries;
    }
}

class Hash {
    constructor(key,value) {
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }
}

module.exports = Hashmap;
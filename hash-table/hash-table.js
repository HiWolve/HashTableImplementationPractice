// Use these to store the key/value pairs in your hash table
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), delete O(1)

  constructor(numBuckets = 2) {
    // Initialize your buckets here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
    

  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0 ; i < key.length ; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.data.length;
  }

  read(key) {

    // Fill this in
    let index = this.hashMod(key);
    let curr = this.data[index];
    

    while (curr){
      if (curr.key === key){
        return curr.value
      }
      curr = curr.next;
    }
    return undefined;


  }


  insert(key, value) { 
    // const index = this.hashMod(key);
  //   const newKey = new KeyValuePair(key, value);

  //   if (!this.data[index]) {
  //     this.data[index] = newKey;
  //     this.count++;
  //   } else {
  //     newKey.next = this.data[index];
  //     this.data[index] = newKey;
  //     this.count++
  //   }

  //   // Fill this in
    let insert = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    let curr = this.data[index];
    insert.next = curr;
    this.data[index] = insert;
    this.count ++;

  }


  resize() {

    // Fill this in
    

  }


  delete(key) {

    // Fill this in

  }

}


module.exports = HashTable;

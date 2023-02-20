const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0
    this.capacity = numBuckets;
    this.data = new Array(this.capacity);
    this.data.fill(null);
  }

  hash(key) {
    // Your code here
    let sha = sha256(key)
    return parseInt(sha256(key).slice(0, 8), 16)
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    let pair = new KeyValuePair(key, value);
    let i = this.hashMod(key);

    if (this.data[i]) {
      throw Error(`hash collision or same key/value pair already exists!`)
    }
    else {
      this.data[i] = pair;
      this.count++
    }

  }

  insertWithHashCollisions(key, value) {
    // Your code here
    let pair = new KeyValuePair(key, value);
    let i = this.hashMod(key);
    if (this.data[i]) {
      pair.next = this.data[i]
    }
    this.data[i] = pair;
    this.count++;
  }

  insert(key, value) {
    // Your code here
    let pair = new KeyValuePair(key, value);
    let i = this.hashMod(key);
    let element = this.data[i];
    if (element) {
      let curr = element
      let updated = false
      while (curr.next) {
        curr = curr.next
        if (curr.key === pair.key) {
          curr.value = pair.value
          updated = true;
        }
      }
      if (updated == false) {
        this.insertWithHashCollisions(key, value);
      }
    }

  }

}


module.exports = HashTable;

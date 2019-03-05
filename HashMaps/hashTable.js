class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  set(key, value) {
    let hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
  }
  get(key) {
    let hash = this._hash(key);
    const currentBucket = this.data[hash];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 1000);
// myHashTable.get("grapes");

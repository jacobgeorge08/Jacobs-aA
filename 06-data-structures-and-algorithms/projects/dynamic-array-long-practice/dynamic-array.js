class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.data = new Array(defaultSize)
    this.length = 0

  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.length += 1;
    this.data[this.length - 1] = val;
  }


  pop() {
    if (this.length >= 0) {
      let popped = this.data[this.length - 1];
      this.data[this.length - 1] = undefined;
      this.length--;
      return popped;
    }
  }

  shift() {
    let shifted = this.data[0]
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    return shifted;
  }

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.length += 1;
    for (let i = this.data.length - 1; i >= 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
  }

  indexOf(val) {
    let index = -1
    for (let i = 0; i < this.data.length; i++) {
      if (val === this.data[i]) {
        index = i;
      }
    }
    return index;
  }

  resize() {
    this.capacity *= 2;
    let data = new Array(this.capacity);
    for (let i = 0; i < this.capacity; i++) {
      data[i] = this.data[i];
    }
    this.data = data;
  }

}


module.exports = DynamicArray;

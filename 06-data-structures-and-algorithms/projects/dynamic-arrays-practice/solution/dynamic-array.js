class DynamicArray {

  constructor(defaultSize = 4) {

    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    return this.data[index]
  }

  unshift(val) {
    this.length += 1;
    for (let i = this.data.length - 1; i >= 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val;
  }

}


module.exports = DynamicArray;

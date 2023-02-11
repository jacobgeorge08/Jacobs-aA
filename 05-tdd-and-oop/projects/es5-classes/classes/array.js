Array.prototype.isEqual = function (array) {

  for (let i = 0; i < this.length; i++) {
    let methodEl = this[i];
    let paramEl = array[i];

    if (methodEl !== paramEl) {
      return false;
    }
  }

  return true;
}

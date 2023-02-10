class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
  sayHello() {
    return (`hello Im ${this.name}`)
  }
  visit(visitor) {
    return `${this.name} visits ${visitor.name}`
  }
  switchVisit(visitor) {
    return `${visitor.name} visits ${this.name}`
  }
  update(deets) {
    if (typeof deets !== `object`) {
      throw TypeError(`Not an Object`);
    }
    if (deets.name === undefined || deets.age === undefined) {
      throw TypeError(`Age/Deets not found`)
    }
    this.name = deets.name;
    this.age = deets.age

  }
  tryUpdate(deets) {
    try {
      this.update(deets);
      return true;
    } catch {
      return false;
    }
  }

  static greetAll(arr) {
    let greetings = []
    arr.forEach(element => {
      greetings.push(element.sayHello());
    });
    return greetings;
  }

}

module.exports = Person;

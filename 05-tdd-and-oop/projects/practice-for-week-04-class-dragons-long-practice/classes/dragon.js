// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  static getDragons(...dragonInstances) {
    return dragonInstances.map(dragon => dragon.name);
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
}

module.exports = Dragon;
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}

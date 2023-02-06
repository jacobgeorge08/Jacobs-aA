const { Character } = require(`./character`)

class Player {

  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
    this.health = 100;
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    let itemArrayFromRoom = this.currentRoom.items.splice(this.currentRoom.items[this.currentRoom.getItemByName(itemName)], 1); // Array.slice returns deleted item in an array
    this.items.push(itemArrayFromRoom[0]);
  }

  dropItem(itemName) {
    let itemArrayFromPlayer = this.items.splice(this.items[this.getItemByName(itemName)], 1);
    this.currentRoom.items.push(itemArrayFromPlayer[0])
    // Array.slice returns deleted item in array and since we are only deleting one item, the first item of the array ie `0` is the dropped item
  }

  eatItem(itemName) {
    // Fill this in
    if (this.getItemByName(itemName).edible == true) {
      this.items.splice(this.items[this.getItemByName(itemName)], 1)
    }

  }

  hit(name) {

    // Fill this in
    let target = this.currentRoom.getEnemyByName(name);
    target.attackTarget = this;
    target.applyDamage(this.strength);
    console.log(`you hit the ${name}`);
    console.log(`${name} has ${target.health} health`);
    target.act();
  }

  getItemByName(name) {
    let i = 0;
    this.items.forEach((item, index) => {
      if (item.name == name) {
        i = index;
      }
    })
    return this.items[i]
  }
}

module.exports = {
  Player,
};

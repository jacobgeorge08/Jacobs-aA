const Manager = require(`./manager`);
const Employee = require(`./employee`);

const Hobbes = new Manager(`Hobbes`, 1000000, `Founder`)
const Calvin = new Manager(`Calvin`, 130000, `Director`, Hobbes)
const Susie = new Manager(`Susie`, 100000, `TA Manager`, Calvin);
const Clifford = new Employee(`Clifford`, 90000, `TA`, Susie);
const Lily = new Employee(`Lily`, 90000, `TA`, Susie);

console.log(`Hobbes`, Hobbes.calculateBonus(0.05))
console.log(`Calvin`, Calvin.calculateBonus(0.05))
console.log(`Susie`, Susie.calculateBonus(0.05))
console.log(`Lily`, Lily.calculateBonus(0.05))
console.log(`Clifford`, Clifford.calculateBonus(0.05));

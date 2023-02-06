const Employee = require(`./employee`)

const jWick = new Employee(`John Wick`, `Dog Lover`);

const jName = jWick.sayName.bind(jWick);
const jOcc = jWick.sayOccupation.bind(jWick)

setTimeout(jName, 2000);
setTimeout(jOcc, 3000);

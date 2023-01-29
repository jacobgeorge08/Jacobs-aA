let helloMessage = require("./hello-message.js")

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

module.exports = sayMessage;

const giveMessageToMrsPotato = require(`./send-messages/give-message-to-mrs-potato`)
const sayHelloTo = require(`./send-messages/say-hello-to`)
const { message1, message2, message3 } = require(`./messages/`)
let msg1 = message1;
let msg2 = message2;
let msg3 = message3;

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber;
let numAttempts;

function askLimit() {
  rl.question(`Enter number of turns: `, (turns) => {
    numAttempts = Number(turns)
    askRange();
  })
}

function askRange() {
  rl.question(`Enter a max number: `, (max) => {
    rl.question(`Enter a min number: `, (min) => {
      console.log(`I am thinking of a number between ${min} and ${max}..`)
      secretNumber = randomInRange(Number(min), Number(max));
      askGuess();
    })
  })
}

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function askGuess() {
  rl.question(`Enter a guess: `, (answer) => {

    if (checkGuess(Number(answer))) {
      rl.close();
    }

    else {
      numAttempts--;

      if (numAttempts == 0) {
        console.log(`Sorry. You lost!`)
        rl.close();
        return;
      }

      askGuess();
    }

  })
}

function checkGuess(num) {
  if (num > secretNumber) {
    console.log(`Too High`)
    return false;
  }
  else if (secretNumber > num) {
    console.log(`Too Low`)
    return false;
  }
  else {
    console.log(`Correct`)
    return true;
  }
}

askLimit();

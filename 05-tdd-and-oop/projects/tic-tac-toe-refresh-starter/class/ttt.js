const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.addCommand('up', 'move cursor up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('down', 'move cursor down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('left', 'move cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'move cursor right', this.cursor.right.bind(this.cursor));

    this.cursor.setBackgroundColor();

  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {
    //empty grid
    let empty = true;
    grid.forEach(row => {
      row.forEach(el => {
        if (el !== ` `) {
          empty = false;
        }
      })
    });
    if (empty) {
      return false;
    }

    // horizontal win
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length - 2; j++) {
        if (grid[i][j] == grid[i][j + 1] && grid[i][j] == grid[i][j + 2]) {
          if (grid[i][j] === `X`) {
            return `X`;
          }
          else if (grid[i][j] === `O`) {
            return `O`;
          }
        }
      }
    }
    // vertical win
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length - 2; j++) {
        if (grid[j][i] == grid[j + 1][i] && grid[j][i] == grid[j + 2][i]) {
          if (grid[j][i] === `X`) {
            return `X`;
          }
          else if (grid[j][i] === `O`) {
            return `O`;
          }
        }
      }
    }
    // diagonal win
    if (grid[0][0] !== " " && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) {
      return grid[0][0];
    }

    if (grid[2][0] !== " " && grid[2][0] === grid[1][1] && grid[2][0] === grid[0][2]) {
      return grid[2][0];
    }

    //Tie
    let full = `T`;
    grid.forEach(row => {
      row.forEach(el => {
        if (el == ` `) {
          full = false;
        }
      })
    })
    return full;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;

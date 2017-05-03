var readline = require('readline');
var Board = require('./board.js');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Game = function(){
  this.board = new Board();
};

Game.prototype.begin = function(){
  var board = this.board;
  var self = this;

  var play = function(player) {
    board.print();
    //check for winner: 
    var winner = board.checkForWin();
    if (winner){
      console.log('looks like' + winner + ' won!')
      rl.close();
    } else if (board.playPieces === 9) {
      console.log('looks like it was a tie :/')
      rl.close();
    } else {
      //no winner - ask for input: 
      self.promptPlayer(player, function(input) {
        var row = input[0];
        var col = input[2];
        board.addPiece(player, row, col);
        if (player === " X") { 
          play(" O");
        } else {
          play(" X");        
        }
      });
    }
  }

  //begin game
  play(' X');
};

Game.prototype.promptPlayer = function(player, cb){
  rl.question('enter row, col - for example "0,0" to play in the upper left corner \n', (answer) => {
    cb(answer);
  });
};

module.exports = Game;



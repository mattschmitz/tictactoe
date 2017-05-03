var readline = require('readline');
var Board = require('./board.js');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Game = function(){
  this.board = new Board();
  //
};

Game.prototype.begin = function(){
  var board = this.board;
  var playing = true;
  var player = 'X'; //start with playerX

  var play = function(player) {
    board.print();

    this.promptPlayer(player, function(input) {
      var row = input[0];
      var col = input[2];

      // console.log('row', row, 'col', col)
      
      board.addPiece(player, row, col);

      var winner = board.checkForWin();

      if (winner){
        console.log('looks like ' + winner + ' won!')
      }
      //else if no plays left
        // console.log('looks like it was a tie :/');
      //else
        // if (player === X) { player = Y; }
        // else player = X;
        // play(player, )
    });
  }

  play.call(this, player);
};

Game.prototype.promptPlayer = function(player, cb){
  rl.question('enter row, col - for example "0,1"', (answer) => {
    cb(answer);
    rl.close();
  });
};

module.exports = Game;



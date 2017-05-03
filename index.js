var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Board = function(){
  this.rows = [];
  for (var i = 0; i < 3; i++ ){
    this.rows.push(['[]','[]','[]'])
  }
  this.playedPieces = 0;
};

Board.prototype.addPiece = function(piece,row,col){
  this.rows[row][col] = piece;
  this.playedPieces++;
}

Board.prototype.print = function(){
  console.log('Board: ')
  var rows = this.rows;
  for (var i = 0; i < rows.length; i++){
    var row = rows[i];
    var rowString = ""
    for (var j = 0; j < row.length; j++) {
      rowString += row[j];
    }
    console.log(rowString);
  }
  console.log();
}

Board.prototype.checkRows = function(){
  var rows = this.rows;
  var winner = null;

  for (var i = 0; i < 3; i++){
    var start = rows[i][0];
    if (start !== '[]'){
      winner = start; //assume winner;
      for (var j = 1; j < 3; j++) {
        var val = this.rows[i][j];
        if (val !== winner){
          winner = null;
          break;
        }
      }
    }
    if (winner) {
      break;
    }
  }
  return winner;
}

Board.prototype.checkForWin = function(){
  if (this.playedPieces < 5) { return false };
  //check rows and columns

  var checkCols = function(){
    //for each col, if all vals are equal, return val, otherwise return null;
  }
  var checkBackDiags = function(piece, row, col){
    //get newPiece at row, col
      //if row === 2 && piece = piece
      //if null or piece != newPiece , return null
      //otherwise, return checkBackDiags(piece, row+1, col+1);
  }
  var checkForwardDiags = function(row, col){
    //get piece at given location
  }

  return this.checkRows() || checkCols() || checkBackDiags(0,0) || checkForwardDiags(2,0)
}


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




var game = new Game();
game.begin();



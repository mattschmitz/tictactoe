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

Board.prototype.checkForWin = function(){
  if (this.playedPieces < 5) { return false };

  //check rows and columns
  var checkRows = function(){
    //for each row, if all vals are equal, return val, otherwise return null;
  }
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

  return checkRows() || checkCols() || checkBackDiags(0,0) || checkForwardDiags(2,0)
}


var Game = function(){
  this.board = new Board();
};

Game.prototype.begin = function(){
  var board = this.board;
  var playing = true;
  var X = "X's", O = "O's";
  var player = X; //start with playerX
  var winner = null;
  while (playing && board.playedPieces < 9) {
    board.print();
    var location = this.promptPlayer(player);
    //play piece player selected
    //check for diags
      //if a winner, set playing === false (or could just break)
    playing = false;
    //switch player
  };

  if (!winner) {
    console.log('looks like it was a tie :/');
  } else {
    console.log('looks like ' + winner + ' won!')
  }
  return winner;
};

Game.prototype.promptPlayer = function(player){
  //ask player to type a row and column
  //return the row and column, or err if incorrect input;
};

var game = new Game();
game.begin();
process.exit();



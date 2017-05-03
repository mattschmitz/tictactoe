var test = require('tape');
var Board = require('../board.js');


test('check rows for winner', function(t){
  testRowsInOrder(t, 'x', 'checkRows');
  testRowsInOrder(t, 'y', 'checkRows');
  t.end();
});

test('check all for winner', function(t){
  testRowsInOrder(t, 'x', 'checkForWin');
  testRowsInOrder(t, 'y', 'checkForWin');
  t.end();
});

var testRowsInOrder = function(t, player, testMethod){
  for (var i = 0; i < 3; i++) {
    var board = new Board();
    board.playedPieces = 8;
    var winner = board[testMethod].call(board);
    t.equal( winner, null, 'no winner with blank Board');

    board.addPiece(player, i, 0);
    winner = board[testMethod].call(board);
    t.equal( winner, null, 'no winner with 1 spot filled');

    board.addPiece(player, i, 1);
    winner = board[testMethod].call(board);
    t.equal( winner, null, 'no winner with 2 spots filled');
    
    board.addPiece(player, i, 2);
    winner = board[testMethod].call(board);
    t.equal( winner, player, `${player} should win with 3 accross row ${i}`);
  }
}


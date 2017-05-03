var test = require('tape');
var Board = require('../board.js');

test('check rows for winner', function(t){
  board = new Board();
  board.addPiece('x', 0, 0);
  board.addPiece('x', 0, 1);
  board.addPiece('x', 0, 2);
  let winner = board.checkRows();
  t.equal( 1, 1, 'numers 1 and 1 are the same');
  t.end();
})

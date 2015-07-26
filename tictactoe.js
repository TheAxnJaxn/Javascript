function Board() {
  this.grid = [
    ["","",""],
    ["","",""],
    ["","",""]
  ]
}

Board.prototype.hasWon = function() {
  !!this.winner()
}

Board.prototype.winner = function() {

}

Board.prototype.isEmpty = function(pos) {
  var row = pos[0];
  var col = pos[1];
  return (this.grid[row][col] === "");
}

Board.prototype.place_mark = function(pos, mark) {
  var row = pos[0];
  var col = pos[1];
  this.grid[row][col] = mark;
}



function Game() {}

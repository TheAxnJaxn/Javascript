// applies callback function to every array el
// returns array unmodified
Array.prototype.myEach = function(callback) {
  for (var x = 0; x < this.length; x++) {
    callback(this[x]);
  }
  return this;
};

// returns a new array with the results of running
// the called block once for each element
Array.prototype.myMap = function(callback) {
  var arr = [];

  this.myEach(function(el) {
    arr.push( callback(el) );
  });

  return arr;
};

// applies a function against an accumulator and
// each array el to reduce it to a single value
Array.prototype.myReduce = function(callback) {
  var accum = this[0];

  this.slice(1).myEach(function(el){
      accum = callback(accum, el);
  });

  return accum;
};

// returns new array of unique elements
Array.prototype.myUniq = function() {
  var arr = [];

  this.myEach(function (el) {
    if (arr.indexOf(el) === -1) {
      arr.push(el);
    }
  });

  return arr;
};

// returns position pairs where els sum to 0
Array.prototype.twoSum = function() {
  var arr = [];

  for (var x = 0; x < this.length-1; x++) {
    for (var y = x+1; y < this.length; y++) {
      if (this[x] + this[y] == 0) {
        arr.push([x, y]);
      }
    }
  }

  return arr;
};

// transposes square matrix (array of arrays)
Array.prototype.myTranspose = function() {
  var arr = "?".repeat(this.length).split("").map(function() {
    return [];
  });

  for (var x = 0; x < this.length; x++) {
    for (var y = 0; y < this.length; y++) {
      arr[x][y] = this[y][x];
    }
  }

  return arr;
}

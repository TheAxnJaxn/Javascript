// bubble sort iteration-style
Array.prototype.bubbleSort = function() {
  var swapped = true;

  while (swapped) {
    swapped = false;
    for (var i = 0; i < this.length; i++) {
      if (this[i] > this[i+1]) {
        var tmp = this[i];
        this[i] = this[i+1];
        this[i+1] = tmp;

        swapped = true;
      }
    }
  }

  return this;
};

// takes a String and returns an Array containing its
// unique substrings
String.prototype.mySubstrings = function() {
  var arr = [];

  for (var idx1 = 0; idx1 < this.length; idx1++) {
    for (var idx2 = idx1+1; idx2 < this.length+1; idx2++) {
      var tempSub = this.substring(idx1, idx2);
      if (arr.indexOf(tempSub) === -1) { arr.push(tempSub); }
    }
  }

  return arr;
};

// returns an Array of all numbers between start and end
//  - recursive solution
function range(start, end) {
  var arr = [];

  if (start < end) {
    arr.push(start);
    arr = arr.concat(range(start+1, end));
  }

  return arr;
};

// recursive exponent
function exponent1(base, exponent) {
  if (exponent === 0) { return 1; }
  return base * exponent1(base, exponent - 1);
}

// recursive exponent
function exponent2(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;

  if (exponent % 2 === 0) {
    return exponent2(base, exponent/2) * exponent2(base, exponent/2);
  }
  else {
    return base * (exponent2(base, (exponent-1) / 2) * exponent2(base, (exponent-1) / 2));
  }
}

// returns array of first n fib numbers
function fib(n) {
  if (n == 1) return [1];
  if (n == 2) return [1, 1];

  var arr = fib(n-1);

  var lastTwo = arr.slice(-2);
  arr.push(lastTwo[0] + lastTwo[1]);

  return arr;
}

// binary search
function bsearch(arr, target) {
  if (arr.length < 2 && arr[0] !== target) { return null; }

  var midpoint = Math.floor(arr.length/2);

  var left_arr = arr.slice(0, midpoint);
  var right_arr = arr.slice(midpoint + 1);

  if (arr[midpoint] === target) {
    return midpoint;
  }
  else if (arr[midpoint] < target) {
    var rightsearch = bsearch(right_arr, target);

    if (rightsearch !== null) {
      return 1 + midpoint + rightsearch;
    }
    else {
      return null;
    }
  }
  else {
    return bsearch(left_arr, target);
  }
}

function makeChange(value, coins) {
  //coins = coins.myUniq();  //method not avail here
  var possibilities = [];

  for (var i = 0; i < coins.length; i++) {
    if (coins[i] === value) {
      return [coins[i]];
    }
    else if (coins[i] < value) {
      possibilities.push( [coins[i]].concat(makeChange(value - coins[i], coins)) );
    }
  }

  return possibilities.sort(function(a, b) {return a.length - b.length;})[0];
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  var midpoint = Math.floor(array.length/2);
  var left_arr = array.slice(0,midpoint);
  var right_arr = array.slice(midpoint);

  return merge(mergeSort(left_arr), mergeSort(right_arr));
}

function merge(array1, array2) {
  var merged = [];

  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] < array2[0]) {
      merged.push(array1.shift());
    }
    else {
      merged.push(array2.shift());
    }
  }

  return merged.concat(array1).concat(array2);
}


function subsets(array) {
  if (array.length == 0) return [[]];
  var popped_thing = array.pop();
  var subs = subsets(array);

  var expanding_subs = subs;

  subs.forEach( function (subset) {
    var temp_subset = subset.slice();
    temp_subset.push(popped_thing);
    expanding_subs.push(temp_subset);
  });

  return expanding_subs;
}

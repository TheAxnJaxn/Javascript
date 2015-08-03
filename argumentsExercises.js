// returns sum of any number of arguments, or 0
function sum() {
  var accum = 0;
  for (var i = 0; i < arguments.length; i++) {
    accum += arguments[i];
  }
  return accum;
};

// binds context, arguments given when called, and any
// extra arguments
Function.prototype.myBind = function(context, args) {
  var fn = this;
  var boundArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    var extraArgs = Array.prototype.slice.call(arguments);
    return fn.apply(context, boundArgs.concat(extraArgs));
  };
};

// takes single arguments successively until it has
// the sufficient number of arguments to run
// curriedSum(4)(5)(3)(2)(6); returns 16
function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      var sum = 0;
      numbers.forEach(function(el) {
        sum += el;
      });
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// var currying = sum.curry(4); returns function
// currying(5)(3)(2)(6); returns 16
Function.prototype.curry = function(numArgs) {
  var fn = this;
  var numbers = [];

  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return fn.apply(fn, numbers);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
};

// implements class inheritance using a surrogate
Function.prototype.inherits = function (parentClass) {
  function Surrogate () {};
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

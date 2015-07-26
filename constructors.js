function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return this.owner + " loves " + this.name;
};

var rawr = new Cat("rawr", "carl");
console.log(rawr.cuteStatement());

var Lenny = new Cat("Lenny", "Benny");
console.log(Lenny.cuteStatement());

Cat.prototype.cuteStatement = function() {
  return "Everyone loves " + this.name;
};

console.log(rawr.cuteStatement());
console.log(Lenny.cuteStatement());

Cat.prototype.meow = function() {
  return "Meow";
}

console.log(rawr.meow())

rawr.meow = function() { return "..."; };

console.log(rawr.meow())
console.log(Lenny.meow())

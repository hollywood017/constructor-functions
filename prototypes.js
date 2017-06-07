function Item(name, price){
  this.name = name;
  this.price = price;
}

Item.prototype.calculatePrice = function() {
  if (this.name === 'fruit') {
    return this.price * 0.95;
  }

  else {
    return this.price;
  }
};

var ball = new Item('soccer ball', 15);
console.log( ball.calculatePrice() );
// => 15

var fruit = new Item('fruit', 10);
console.log( fruit.calculatePrice() );
// => 9.5




function Animal (nameParam, ownerParam, personalityParam) {
  this.name = nameParam;
  this.owner = ownerParam;
  this.personality = personalityParam;
}

Animal.prototype.showOwnerName = function(){
  return "My owner is " + this.owner;
};

Animal.prototype.episode = function () {
  return this.name + ' is giving '+ this.owner + ' a hell of a time by being too ' + this.personality + '.';
};

var pet1 = new Animal('Ajax', 'Gabriela', 'Playful');
var pet2 = new Animal('Thunder', 'Ali', 'Curious');
var pet3 = new Animal('Nala', 'Darren', 'Sassy');
var pet4 = new Animal('Storm', 'Jarrod', 'Neurotic');
var pet5 = new Animal('Widget', 'Nick', 'Bratty');


console.log( pet1.showOwnerName() );
console.log( pet5.episode() );
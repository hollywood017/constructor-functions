function Monster (nameParam, scaryParam, specialParam) {
  // var this = {};
  this.name = nameParam;
  this.scariness = scaryParam;
  this.speciality = specialParam;
  
  this.scare = function () {
    console.log(this.name + ' is scaring you using ' + this.speciality);
  };
}


var monster3 = new Monster('Cookie Monster', 4, 'Eating Cookies');
var monster4 = new Monster('Elmo', 1, 'Singing?');
var monster5 = new Monster('Randall', 6, 'Invisibility');
var monster6 = new Monster('Samara', 10, 'Creepy Crawling');

monster3.scare();
monster4.scare();


function Car (brandParam, modelParam, colorParam) {
  // this = {};
  this.brand = brandParam;
  this.model = modelParam;
  this.color = colorParam;
  this.gasTank = 100;
  this.musicOn = false;
  this.miles = 0;
  
  this.race = function () {
    console.log('RACING and stuff');
    this.gasTank -= 50;
    this.miles += 20;
  };
  
  this.turnOnMusic = function () {
    this.musicOn = true;
  };
  
  this.burnOut = function () {
    console.log('BURNING OUT');
    this.areTiresSpinning = true;
    this.gasTank -= 25;
  };
  
  this.putGas = function () {
    console.log('Putting gas!');
    this.gasTank = 100;
  };
}


var ourCar = new Car('Tesla', 'Model S', 'orange');
console.log(ourCar);

var myCar = new Car('Acura');
myCar.burnOut();
console.log(myCar);

var yourCar = new Car('Ford');
var car3 = new Car('Toyota');
var car4 = new Car('Kia');

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

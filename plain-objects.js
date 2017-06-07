var car = {
  brand: 'Acura',
  model: 'NSX',
  color: 'blue',
  type: 'Coupe',
  name: 'Missy',
  isOn: false,
  musicOn: false,
  miles: 0,
  areTiresSpinning: false,
  gasTank: 100,
  
  race: function () {
    console.log('RACING and stuff');
    this.gasTank -= 50;
    this.miles += 20;
    // car === this
  },
  
  turnOnMusic: function () {
    this.musicOn = true;
  },
  
  burnOut: function () {
    console.log('BURNING OUT');
    this.areTiresSpinning = true;
    this.gasTank -= 25;
  },
  
  putGas: function () {
    console.log('Putting gas!');
    this.gasTank = 100;
  }
};

car.race();

car.turnOnMusic();

car.burnOut();
car.burnOut();
car.burnOut();
console.log(car);
car.putGas();
console.log(car);




var nizarsCar = {
  brand: 'Tesla',
  model: 'S',
  color: 'Orange',
  type: 'Coupe',
  name: 'Niko',
  isOn: false,
  musicOn: false,
  miles: 0,
  areTiresSpinning: false,
  gasTank: 100,
  
  race: function () {
    console.log('RACING and stuff');
    this.gasTank -= 50;
    this.miles += 20;
    // nizarsCar === this
  },
  
  turnOnMusic: function () {
    this.musicOn = true;
  },
  
  burnOut: function () {
    console.log('BURNING OUT');
    this.areTiresSpinning = true;
    this.gasTank -= 25;
  },
  
  putGas: function () {
    console.log('Putting gas!');
    this.gasTank = 100;
  }
};

nizarsCar.race();

nizarsCar.turnOnMusic();

nizarsCar.burnOut();
nizarsCar.burnOut();
nizarsCar.burnOut();
console.log(nizarsCar);
nizarsCar.putGas();
console.log(nizarsCar);

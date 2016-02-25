var Animal = require('./animal');

function Zoo(location, name, status, animal) {
 // write code here
 this.location = location;
 this.name = name;
 this.status = 'closed';
 this.animals = [];
}


Zoo.prototype.isOpen = function() {
  if(this.status = 'closed') {
    return false;
  }
}
Zoo.prototype.open = function() {
  this.status = 'open';
}
Zoo.prototype.addAnimal = function(animal) {
  if (this.status === 'open' && animal instanceof Animal) {
    this.animals.push(animal);
  }
}
Zoo.prototype.removeAnimal = function (animal) {
  if (this.status === 'open' && animal instanceof Animal) {
    this.animals.splice(animal, 1);
  }
}
Zoo.prototype.changeLocation = function () {
  return this.location;
}
Zoo.prototype.close = function() {
  if (this.status === 'open') {
    return 'closed';
  }
} // write more code here


module.exports = Zoo;

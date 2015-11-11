var Animal = require('./animal.js');

function Zoo(location, name) {
  this.location = location;
  this.name     = name;
  this.status   = 'closed';
  this.animals  = [];
}

Zoo.prototype.isOpen = function() {
  var openStatus = {
    'closed': false,
    'open'  : true
  };

  return openStatus[this.status];
};

Zoo.prototype.open = function() {
  this.status = 'open';
};

Zoo.prototype.addAnimal = function(animal) {
  if (this.status === 'open' && animal instanceof Animal && this.animals.indexOf(animal) === -1) {
    this.animals.push(animal);
  }
};

Zoo.prototype.removeAnimal = function(animal) {
  var foundIndex;

  if (this.status === 'open') {

    for (var i = 0; i < this.animals.length; i++) {
      if (this.animals[i].kind === animal) {
        foundIndex = i;
      }
    }
    
    this.animals.splice(foundIndex, 1);
  }
};

Zoo.prototype.changeLocation = function(location) {
  this.location = location;
};


Zoo.prototype.close = function() {
  this.status = 'closed';
};

module.exports = Zoo;

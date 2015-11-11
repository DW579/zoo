function Animal(kind, sound, name, age){
  this.kind  = kind;
  this.sound = sound;
  this.name  = name;
  this.age   = age;
  this.awake = false;
}

Animal.prototype.wakeUp = function() {
  this.awake = true;
};

Animal.prototype.speak = function() {
  return this.sound;
};

Animal.prototype.feed = function() {
  var fedSound;

  if (this.awake) {
    fedSound = 'NOM NOM NOM';
  }

  return fedSound;
};

Animal.prototype.growUp = function() {
  return this.age++;
};

Animal.prototype.sleep = function() {
  this.awake = false;
};

module.exports = Animal;

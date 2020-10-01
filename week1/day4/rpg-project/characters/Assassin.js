const Character = require('./Character');

class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, dmgCounter = 0) {
    super(hp, dmg, mana, dmgCounter);
  }
}

module.exports = Assassin;

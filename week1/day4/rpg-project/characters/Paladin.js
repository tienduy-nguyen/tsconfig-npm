const Character = require('./Character');

class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, dmgCounter = 0) {
    super(hp, dmg, mana, dmgCounter);
  }
}

module.exports = Paladin;

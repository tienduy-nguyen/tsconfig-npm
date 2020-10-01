const Character = require('./Character');

class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200, dmgCounter = 0) {
    super(hp, dmg, mana, dmgCounter);
  }
}

module.exports = Monk;

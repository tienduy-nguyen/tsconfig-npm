const Character = require('./Character');

class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0, dmgCounter = 0) {
    super(hp, dmg, mana, dmgCounter);
  }
}

module.exports = Berzerker;

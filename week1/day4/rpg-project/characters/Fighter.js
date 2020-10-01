const Character = require('./Character');

class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, dmgCounter = 0) {
    super(hp, dmg, mana, dmgCounter);
  }
}

module.exports = Fighter;

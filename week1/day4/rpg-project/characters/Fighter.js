const Character = require('./Character');

class Fighter extends Character {
  constructor(
    name,
    hp = 12,
    dmg = 4,
    mana = 40,
    dmgCounter = 0,
    character = 'Fighter',
    status = 'playing',
    id
  ) {
    super(name, hp, dmg, mana, character, dmgCounter, status, id);
  }
}

module.exports = Fighter;

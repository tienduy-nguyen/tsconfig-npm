const Character = require('./Character');

class Monk extends Character {
  constructor(
    name,
    hp = 8,
    dmg = 2,
    mana = 200,
    dmgCounter = 0,
    character = 'Monk',
    status = 'playing',
    id
  ) {
    super(name, hp, dmg, mana, character, status, dmgCounter, id);
  }
}

module.exports = Monk;

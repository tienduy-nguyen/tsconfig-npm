const Character = require('./Character');

class Berzerker extends Character {
  constructor(
    name,
    hp = 8,
    dmg = 4,
    mana = 0,
    character = 'Berserker',
    dmgCounter = 0,
    status = 'playing',
    id
  ) {
    super(name, hp, dmg, mana, character, dmgCounter, status, id);
  }
}

module.exports = Berzerker;

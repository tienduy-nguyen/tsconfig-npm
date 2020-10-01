const Character = require('./Character');

class Paladin extends Character {
  constructor(
    name,
    hp = 16,
    dmg = 3,
    mana = 160,
    character = 'Paladin',
    dmgCounter = 0,
    status = 'playing',
    id
  ) {
    super(name, hp, dmg, mana, character, dmgCounter, status, id);
  }
}

module.exports = Paladin;

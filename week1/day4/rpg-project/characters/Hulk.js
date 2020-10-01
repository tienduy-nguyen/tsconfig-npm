const Character = require('./Character');

class Hulk extends Character {
  constructor(
    name,
    hp = 20,
    dmg = 2,
    mana = 100,
    character = 'Hulk',
    dmgCounter = 0,
    status = 'playing',
    id
  ) {
    super(name, hp, dmg, mana, character, dmgCounter, status, id);
  }
}

module.exports = Hulk;

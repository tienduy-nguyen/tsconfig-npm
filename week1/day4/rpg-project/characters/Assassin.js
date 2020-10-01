const Character = require('./Character');

class Assassin extends Character {
  constructor(
    name,
    hp = 6,
    dmg = 6,
    mana = 20,
    character = 'Assassin',
    dmgCounter = 0,
    status = 'playing',
    id
  ) {
    super(name, hp, dmg, mana, character, dmgCounter, status, id);
  }
}

module.exports = Assassin;

const Character = require('./Character');

class Wizard extends Character {
  constructor(
    name,
    hp = 10,
    dmg = 2,
    mana = 200,
    character = 'Wizard',
    dmgCounter = 0,
    status = 'playing',
    id
  ) {
    super(name, hp, dmg, mana, character, dmgCounter, status, id);
  }
}

module.exports = Wizard;

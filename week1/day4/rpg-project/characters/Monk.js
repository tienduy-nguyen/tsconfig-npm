const Character = require('./Character');
const Heal = require('../skills/Heal');

class Monk extends Character {
  constructor(
    name,
    hp = 8,
    dmg = 2,
    mana = 200,
    dmgCounter = 0,
    character = 'Monk',
    status = 'playing',
    id,
    skill = new Heal()
  ) {
    super(name, hp, dmg, mana, character, status, dmgCounter, id);
    this.skill = skill;
  }
}

module.exports = Monk;

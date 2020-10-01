const Character = require('./Character');
const Rage = require('../skills/Rage');

class Berzerker extends Character {
  constructor(
    name,
    hp = 8,
    dmg = 4,
    mana = 0,
    character = 'Berserker',
    dmgCounter = 0,
    status = 'playing',
    id,
    skill = new Rage()
  ) {
    super(name, hp, dmg, mana, character, dmgCounter, status, id);
    this.skill = skill;
  }
}

module.exports = Berzerker;

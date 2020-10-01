const Character = require('./Character');
const Puch = require('../skills/Puch');
class Hulk extends Character {
  constructor(
    name,
    hp = 20,
    dmg = 2,
    mana = 90,
    character = 'Hulk',
    dmgCounter = 0,
    status = 'playing',
    id,
    skill = new Puch()
  ) {
    super(name, hp, dmg, mana, character, dmgCounter, status, id);
    this.skill = skill;
  }
}

module.exports = Hulk;

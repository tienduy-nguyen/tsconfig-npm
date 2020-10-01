const Character = require('./Character');
const HealingLighting = require('../skills/HealingLighting');

class Paladin extends Character {
  constructor(
    name,
    hp = 16,
    dmg = 3,
    mana = 160,
    character = 'Paladin',
    dmgCounter = 0,
    status = 'playing',
    id,
    skill = new HealingLighting()
  ) {
    super(name, hp, dmg, mana, character, dmgCounter, status, id);
    this.skill = skill;
  }
}

module.exports = Paladin;

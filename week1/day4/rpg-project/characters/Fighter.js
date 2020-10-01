const Character = require('./Character');
const DarkVision = require('../skills/DarkVision');
class Fighter extends Character {
  constructor(
    name,
    hp = 12,
    dmg = 4,
    mana = 40,
    dmgCounter = 0,
    character = 'Fighter',
    status = 'playing',
    id,
    skill = new DarkVision()
  ) {
    super(name, hp, dmg, mana, character, dmgCounter, status, id);
    this.skill = skill;
  }
}

module.exports = Fighter;

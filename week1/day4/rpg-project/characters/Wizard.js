const Character = require('./Character');
const Fireball = require('../skills/Fireball');

class Wizard extends Character {
  constructor(
    name,
    hp = 10,
    dmg = 2,
    mana = 200,
    character = 'Wizard',
    dmgCounter = 0,
    status = 'playing',
    id,
    skill = new Fireball()
  ) {
    super(name, hp, dmg, mana, character, dmgCounter, status, id);
    this.skill = skill;
  }
}

module.exports = Wizard;

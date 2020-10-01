const SpecialSkill = require('./SpecialSkill');

class Fireball extends SpecialSkill {
  constructor(dmg = 7, mana = 25, dmgCounter = 0, dmgBonus = 0, pvBonus = 0) {
    super(dmg, mana, dmgCounter, dmgBonus, pvBonus);
  }
}

module.exports = Fireball;

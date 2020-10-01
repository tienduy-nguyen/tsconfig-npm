const SpecialSkill = require('./SpecialSkill');

class HealingLighting extends SpecialSkill {
  constructor(dmg = 4, mana = 40, dmgCounter = 5, dmgBonus = 0, pvBonus = 0) {
    super(dmg, mana, dmgCounter, dmgBonus, pvBonus);
  }
}

module.exports = HealingLighting;

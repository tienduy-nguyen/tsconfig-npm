const SpecialSkill = require('./SpecialSkill');

class DarkVision extends SpecialSkill {
  constructor(dmg = 5, mana = 20, dmgCounter = 2, dmgBonus = 0, pvBonus = 0) {
    super(dmg, mana, dmgCounter, dmgBonus, pvBonus);
  }
}

module.exports = DarkVision;

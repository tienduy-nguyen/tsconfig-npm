const SpecialSkill = require('./SpecialSkill');

class ShadowHit extends SpecialSkill {
  constructor(dmg = 7, mana = 20, dmgCounter = 0, dmgBonus = 0, pvBonus = -7) {
    super(dmg, mana, dmgCounter, dmgBonus);
    this.pvBonus = pvBonus;
  }
}

module.exports = ShadowHit;

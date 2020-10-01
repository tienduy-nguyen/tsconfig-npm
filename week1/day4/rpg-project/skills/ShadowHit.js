const SpecialSkill = require('./SpecialSkill');

class ShadowHit extends SpecialSkill {
  constructor(dmg = 7, mana = 20, dmgCounter = 100, dmgBonus = 0, pvPlus = -7) {
    super(dmg, mana, dmgCounter, dmgBonus);
    this.pvPlus = pvPlus;
  }
}

module.exports = ShadowHit;

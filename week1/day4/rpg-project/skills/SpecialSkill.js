class SpecialSkill {
  constructor(dmg, mana, dmgCounter = 0, dmgBonus = 0) {
    this.dmg = dmg;
    this.mana = mana;
    this.dmgCounter = dmgCounter;
    this.dmgBonus = dmgBonus;
  }
}
module.exports = SpecialSkill;

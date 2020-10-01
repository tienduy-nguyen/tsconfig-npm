const Skill = require('./Skill');

class DarkVision extends Skill {
  constructor(dmg = 5, mana = 20, dmgCounter = 2, dmgBonus = 0) {
    super(dmg, mana, dmgCounter, dmgBonus);
  }
}

module.exports = DarkVision;

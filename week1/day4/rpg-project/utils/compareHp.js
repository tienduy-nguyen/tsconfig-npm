const compareHp = (a, b) => {
  if (a.hp > b.hp) return 1;
  if (a.hp < b.hp) return -1;
  return 0;
};

module.exports = compareHp;

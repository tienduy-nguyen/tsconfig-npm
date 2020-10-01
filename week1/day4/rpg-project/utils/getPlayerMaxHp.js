const getPlayerMaxHp = (players) => {
  if (!players) return;
  let max = players[0].hp;
  let result = players[0];

  players.forEach((x) => {
    if (x.hp > max) {
      result = x;
    }
  });
  return result;
};

module.exports = getPlayerMaxHp;

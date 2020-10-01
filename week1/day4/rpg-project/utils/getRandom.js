const getRandom = (characterList) => {
  return characterList[Math.floor(Math.random() * characterList.length)];
};

module.exports = getRandom;

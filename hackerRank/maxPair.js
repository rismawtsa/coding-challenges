function maxPairs(skillLevel, minDiff) {
  const skillMap = {};
  skillLevel.forEach((val, index) => {
    skillMap[index] = true;
  });
  let maxPair = 0;
  for (let i = 0; i < skillLevel.length; i++) {
    if (skillMap[i]) {
      for (let j = i; j < skillLevel.length; j++) {
        if (skillMap[j]) {
          console.log({ i, j });
          if (Math.abs(skillLevel[i] - skillLevel[j]) === minDiff) {
            maxPair++;
            skillMap[i] = false;
            skillMap[j] = false;
          }
        }
      }
    }
  }

  console.log({ skillMap });

  return maxPair;
}

console.log(maxPairs([1, 1, 2, 3, 4, 5, 6, 5, 7, 6, 3, 6], 4));

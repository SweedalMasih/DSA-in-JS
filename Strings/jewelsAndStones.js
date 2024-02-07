var numJewelsInStones = function (jewels, stones) {
  const jewelsArr = jewels.split("");
  const stonesArr = stones.split("");
  // console.log(jewelsArr, stonesArr);
  let count = 0;
  for (let i = 0; i < jewelsArr.length; i++) {
    for (let j = 0; j < stonesArr.length; j++) {
      if (stonesArr[j] === jewelsArr[i]) {
        count++;
      }
    }
  }
  return count;
};

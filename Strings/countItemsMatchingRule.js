var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    const subArr = items[i];
    // console.log(subArr);
    for (let j = 0; j < subArr.length; j++) {
      // console.log(subArr[j]);
      if (ruleKey === "type") {
        if (j === 0 && subArr[j] === ruleValue) {
          count++;
        }
      } else if (ruleKey === "color") {
        if (j === 1 && subArr[j] === ruleValue) {
          count++;
        }
      } else if (ruleKey === "name") {
        if (j === 2 && subArr[j] === ruleValue) {
          count++;
        }
      }
    }
  }
  // console.log(count)
  return count;
};

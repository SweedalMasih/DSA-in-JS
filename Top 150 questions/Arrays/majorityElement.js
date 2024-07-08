var majorityElement = function (nums) {
  const majorityNum = Math.floor(nums.length / 2);
  const numMap = new Map();

  for (const num of nums) {
    if (!numMap.has(num)) {
      numMap.set(num, 1);
    } else {
      numMap.set(num, numMap.get(num) + 1);
    }

    if (numMap.get(num) > majorityNum) {
      return num;
    }
  }
};

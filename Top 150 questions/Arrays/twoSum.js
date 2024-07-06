var twoSum = function (nums, target) {
  const numsMap = new Map();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;
    if (numsMap.has(complement)) {
      console.log(numsMap.get(complement), i);
      return [numsMap.get(complement), i];
    }
    numsMap.set(currentNum, i);
  }
};

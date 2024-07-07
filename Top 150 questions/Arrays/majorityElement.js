var majorityElement = function (nums) {
  const majorityNum = Math.ceil(nums.length / 2);
  if (majorityNum === 1) return nums[0];
  const numMap = new Map();

  for (const num of nums) {
    if (!numMap.has(num)) {
      numMap.set(num, 1);
    } else {
      numMap.set(num, numMap.get(num) + 1);
    }
  }

  for (const [key, value] of numMap) {
    if (value === majorityNum) return key;
  }
};

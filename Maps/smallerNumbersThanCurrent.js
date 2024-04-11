var smallerNumbersThanCurrent = function(nums) {
  const countMap = new Map();
  const sortedNums = [...nums].sort((a, b) => a - b);
  
  console.log(nums, sortedNums)
  for (let i = 0; i < sortedNums.length; i++) {
      if (!countMap.has(sortedNums[i])) {
          countMap.set(sortedNums[i], i);
      }
  }
  
  const result = nums.map(num => countMap.get(num));
  
  console.log(result);
  return result;
};
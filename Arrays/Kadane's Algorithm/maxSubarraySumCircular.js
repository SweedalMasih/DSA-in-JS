var maxSubarraySumCircular = function (nums) {
  const n = nums.length;

  let maxSum = -Infinity,
    minSum = Infinity,
    totalSum = 0;
  let currentMax = 0,
    currentMin = 0;

  for (let i = 0; i < n; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSum = Math.max(maxSum, currentMax);

    currentMin = Math.min(nums[i], currentMin + nums[i]);
    minSum = Math.min(minSum, currentMin);

    totalSum += nums[i];
  }

  if (maxSum < 0) {
    return maxSum;
  }

  return Math.max(maxSum, totalSum - minSum);
};

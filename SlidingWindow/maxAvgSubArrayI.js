var findMaxAverage = function (nums, k) {
  if (k > nums.length) return null;

  let tempSum,
    maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  console.log(maxSum);

  tempSum = maxSum;

  for (let i = k; i < nums.length; i++) {
    tempSum = tempSum - nums[i - k] + nums[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum / k;
};

var countPairs = function (arr, target) {
  /*
  const length = nums.length;
  let count = 0;
  for(let i=0; i<length-1; i++) {
      for(let j=i+1; j<length; j++) {
          if(nums[i] + nums[j] < target) {
              count++;
          }
      }
  }
  */

  arr.sort((a, b) => a - b);
  let count = 0;
  for (let left = 0, right = arr.length - 1; left < right; right--) {
    while (left < right && arr[left] + arr[right] < target) {
      count += right - left;
      left++;
    }
  }
  // console.log(count);
  return count;
};

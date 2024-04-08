var merge = function (nums1, m, nums2, n) {
  while (nums1[nums1.length - 1] === 0) {
    nums1.pop();
  }

  const mergedArr = nums1.concat(nums2);
  mergedArr.sort((a, b) => a - b);

  console.log(mergedArr);

  nums1.length = 0;

  let i = 0;
  while (mergedArr[i] === 0) {
    mergedArr.shift();
  }

  while (i < mergedArr.length) {
    nums1.push(mergedArr[i]);
    i++;
  }

  while (nums1.length < m + n) {
    if (nums1[nums1.length - 1] <= 0) {
      nums1.push(0);
    } else {
      nums1.unshift(0);
    }
  }
  // console.log(mergedArr, nums1);

  return nums1;
};

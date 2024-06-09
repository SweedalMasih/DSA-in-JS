var merge = function (nums1, m, nums2, n) {
  let idx = -1;
  for (let i = 0; i < nums1.length; i++) {
    if (i >= m && nums1[i] === 0) {
      idx = idx + 1;
      nums1[i] = nums2[idx];
    }
  }

  return nums1.sort((a, b) => a - b);
};

var checkIfExist = function (arr) {
  const nums = new Map();

  for (let i = 0; i < arr.length; i++) {
    const result = arr[i];
    if (result % 2 === 0 && nums.has(result / 2)) {
      return true;
    }
    if (nums.has(result * 2)) {
      return true;
    }
    nums.set(arr[i], i);
  }

  // console.log(nums)
  return false;
};

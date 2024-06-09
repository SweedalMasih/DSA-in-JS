var reduce = function (nums, fn, init) {
  if (nums.length === 0) return init;

  let res = 0;
  let valFromPrevCall = init;
  for (let i = 0; i < nums.length; i++) {
    const value = fn(valFromPrevCall, nums[i]);
    valFromPrevCall = value;
    // console.log(value, res);
    res = value;
  }

  console.log(res);
  return res;
};

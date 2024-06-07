var map = function (arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const value = fn(arr[i], i);
    res.push(value);
  }

  console.log(arr, res);
  return res;
};

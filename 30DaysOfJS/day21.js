var chunk = function (arr, size) {
  const res = [];
  let subArr = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    subArr.push(arr[i]);
    count++;

    if (count === size) {
      res.push(subArr);
      subArr = [];
      count = 0;
    }
  }

  if (subArr.length > 0) {
    res.push(subArr);
  }

  return res;
};

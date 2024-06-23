var flat = function (arr, n) {
  if (n === 0) return arr;

  const res = [];

  function flatten(nestedArr, depth) {
    for (let i = 0; i < nestedArr.length; i++) {
      if (Array.isArray(nestedArr[i]) && depth < n) {
        flatten(nestedArr[i], depth + 1);
      } else {
        res.push(nestedArr[i]);
      }
    }
  }

  flatten(arr, 0);

  return res;
};

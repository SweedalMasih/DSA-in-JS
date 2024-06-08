var filter = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const value = fn(arr[i], i);

    if (value) result.push(arr[i]);
  }
  return result;
};

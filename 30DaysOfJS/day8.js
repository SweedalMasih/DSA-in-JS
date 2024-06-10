var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    let res = 0;
    let updatedX = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      const value = functions[i](updatedX);
      updatedX = value;
      res = value;
    }
    return res;
  };
};

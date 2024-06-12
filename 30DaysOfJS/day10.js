var once = function (fn) {
  let count = 0;
  return function (...args) {
    if (count < 1) {
      count++;
      return fn(...args);
    } else if (count === 1) {
      return undefined;
    }
  };
};

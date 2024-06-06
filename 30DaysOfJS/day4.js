var createCounter = function (init) {
  let current = init;
  return {
    reset: function () {
      current = init;
      return current;
    },
    increment: function () {
      current++;
      return current;
    },
    decrement: function (counter) {
      current--;
      return current;
    },
  };
};

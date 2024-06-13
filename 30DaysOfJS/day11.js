function memoize(fn) {
  const calls = {};
  return function (...args) {
    if (args in calls) {
      return calls[args];
    } else {
      calls[args] = fn(...args);
      return calls[args];
    }
  };
}

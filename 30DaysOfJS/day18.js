var debounce = function (fn, t) {
  let timeOutId;
  return function (...args) {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

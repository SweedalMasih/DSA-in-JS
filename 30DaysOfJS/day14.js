var cancellable = function (fn, args, t) {
  const timeOut = setTimeout(() => {
    fn(...args);
  }, t);

  const cancelFn = () => clearTimeout(timeOut);

  return cancelFn;
};

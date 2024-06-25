Array.prototype.groupBy = function (fn) {
  const obj = {};
  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);
    if (!obj[key]) {
      obj[key] = [];
    }

    obj[key].push(this[i]);
  }

  return obj;
};

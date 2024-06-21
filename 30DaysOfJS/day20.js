var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    return obj.length < 1;
  } else {
    return Object.keys(obj).length < 1;
  }
};

var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    const newArr = [];
    for (let i = 0; i < obj.length; i++) {
      if (
        Array.isArray(obj[i]) ||
        (obj[i] !== null && typeof obj[i] === "object")
      ) {
        const nested = compactObject(obj[i]);
        newArr.push(nested);
      } else if (Boolean(obj[i])) {
        newArr.push(obj[i]);
      }
    }
    return newArr;
  } else if (obj !== null && typeof obj === "object") {
    const newObj = {};
    for (let key in obj) {
      if (
        Array.isArray(obj[key]) ||
        (obj[key] !== null && typeof obj[key] === "object")
      ) {
        const nested = compactObject(obj[key]);
        newObj[key] = nested;
      } else if (Boolean(obj[key])) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }

  return obj;
};

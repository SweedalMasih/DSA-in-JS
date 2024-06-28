const deepMerge = (obj1, obj2) => {
  const result = { ...obj1 };

  for (let key in obj2) {
    if (obj2[key] instanceof Object && !Array.isArray(obj2[key])) {
      result[key] = deepMerge({}, obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
};

var join = function (arr1, arr2) {
  const combinedArr = arr1.concat(arr2);

  const uniqueMap = new Map();

  combinedArr.forEach((item) => {
    if (uniqueMap.has(item.id)) {
      const existingItem = uniqueMap.get(item.id);
      uniqueMap.set(item.id, deepMerge(existingItem, item));
    } else {
      uniqueMap.set(item.id, item);
    }
  });

  const uniqueArr = Array.from(uniqueMap.values()).sort((a, b) => a.id - b.id);

  return uniqueArr;
};

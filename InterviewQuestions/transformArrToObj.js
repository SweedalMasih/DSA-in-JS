function transformToObjects(arr) {
  const arrOfObjects = [];

  for (let i = 0; i < arr.length; i++) {
    arrOfObjects.push({ val: arr[i] });
  }
  return arrOfObjects;
}

transformToObjects([1, 2, 3]);

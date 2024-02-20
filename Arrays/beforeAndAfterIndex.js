function beforeAndAfterIndex(arr, index, k) {
  const newArr = arr.concat(arr);

  let eleBeforeIndex = [];
  let eleAfterIndex = [];

  for (let i = index + 1; i <= index + k; i++) {
    eleAfterIndex.push(newArr[i]);
  }

  for (let i = index - 1; i >= index - k; i--) {
    eleBeforeIndex.unshift(newArr[i < 0 ? arr.length + i : i]);
  }

  console.log("After:", eleAfterIndex);
  console.log("Before:", eleBeforeIndex);
}

const arr = [1, 2, 3, 4, 5];
const index = 0;
const k = 2;
// After: [1,2]
// Before: [3, 4]

beforeAndAfterIndex(arr, index, k);

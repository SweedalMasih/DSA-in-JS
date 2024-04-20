const arr = [41, 39, 33, 18, 27, 12];
const value = 100;

function maxBinaryHeap(arr, val) {
  arr.push(val);

  let valIndex = arr.length - 1;

  while (valIndex > 0) {
    let parentIndex = Math.floor((valIndex - 1) / 2);

    console.log(arr, valIndex, parentIndex);

    if (arr[valIndex] <= arr[parentIndex]) {
      return;
    } else {
      const temp = arr[valIndex];
      arr[valIndex] = arr[parentIndex];
      arr[parentIndex] = temp;
    }

    valIndex = parentIndex;
  }

  console.log("result: ", arr);
}

maxBinaryHeap(arr, value);

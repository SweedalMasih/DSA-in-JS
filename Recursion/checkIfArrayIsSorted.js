function checkIfArrayIsSorted(arr, idx) {
  if (arr.length === idx + 1) {
    return true;
  } else {
    if (arr[idx] > arr[idx + 1]) {
      return false;
    } else {
      return checkIfArrayIsSorted(arr, idx + 1);
    }
  }
}

console.log(checkIfArrayIsSorted([1, 2, 3, 7, 5], 0));
console.log(checkIfArrayIsSorted([1, 2, 3, 4, 5, 10], 0));

function getSecondMax(arr) {
  if (arr.length < 2) {
    return null; // Not enough elements to find the second maximum
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  if (secondMax === -Infinity) {
    return null; // No second maximum found (all elements might be the same)
  }

  return secondMax;
}

const arr = [60, 50, 70, 90, 50, 45];
console.log(getSecondMax(arr));

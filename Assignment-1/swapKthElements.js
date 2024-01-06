class Solution {
  swapKth(arr, n, k) {
    //code here
    let length = arr.length;
    let elementFromStart;
    let elementFromEnd;

    for (let i = 0; i < k; i++) {
      elementFromStart = arr[i];
    }

    for (let i = length - 1; i >= n - k; i--) {
      elementFromEnd = arr[i];
    }

    // console.log(elementFromStart, elementFromEnd)

    arr[k - 1] = elementFromEnd;
    arr[length - k] = elementFromStart;

    return arr;
  }
}

class Solution {
  getMinMax(arr, n) {
    //code here
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < n; i++) {
      // console.log(arr[i], min, max)
      if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }
    // console.log(arr, min, max)

    return [min, max];
  }
}

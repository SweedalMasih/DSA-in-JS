class Solution {
  valueEqualToIndex(arr, n) {
    //code here
    let length = arr.length;
    let valueEqualToIndexValue = [];

    for (let i = 1; i <= length; i++) {
      // console.log(i, arr[i-1])
      if (arr[i - 1] === i) {
        valueEqualToIndexValue.push(arr[i - 1]);
      }
    }
    // console.log(valueEqualToIndexValue);
    return valueEqualToIndexValue;
  }
}

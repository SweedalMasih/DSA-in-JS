class Solution {
  maximumSumSubarray(K, Arr, N) {
    //code here

    let sum = 0;
    for (let i = 0; i < K; i++) {
      sum = sum + Arr[i];
    }

    let maxSum = sum;
    for (let i = K; i < Arr.length; i++) {
      maxSum = maxSum - Arr[i - K] + Arr[i];

      if (maxSum > sum) {
        sum = maxSum;
      }
    }

    // console.log(sum);
    return sum;
  }
}

class Solution {
  armstrongNumber(n) {
    //code here
    let arr = n.toString().split("");
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum = sum + Math.pow(arr[i], arr.length);
      // console.log(sum)
    }

    if (sum === n) {
      return "Yes";
    } else {
      return "No";
    }
  }
}

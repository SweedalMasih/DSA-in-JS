class Solution {
  is_palindrome(n) {
    //code here
    // number to an array of string values
    let arr = n.toString().split("");
    // console.log(n, arr)
    let length = arr.length;
    for (let i = 0; i < length / 2; i++) {
      if (arr[i] !== arr[length - 1 - i]) {
        return "No";
      }
    }
    return "Yes";
  }
}

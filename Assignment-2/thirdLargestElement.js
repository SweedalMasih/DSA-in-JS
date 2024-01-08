class Solution {
  thirdLargest(a, n) {
    //your code here
    // sorting the array in descending order
    a.sort((a, b) => b - a);
    let length = a.length;

    if (length < 3) {
      return -1;
    }

    let max = a[0];
    let count = 1;

    // console.log(max, a);

    // this is not needed as the array is already sorted
    // for(let i=1; i<length; i++) {
    //     if(a[i] < max) {
    //         max = a[i];
    //         count++;
    //     }
    //     if(count===3) {
    //         return max;
    //     }
    // }

    return a[2];
  }
}

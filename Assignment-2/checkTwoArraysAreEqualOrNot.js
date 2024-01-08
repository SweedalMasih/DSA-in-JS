class Solution {
  //Function to check if two arrays are equal or not.
  check(A, B, N) {
    // code here
    if (A.length !== B.length) {
      return 0;
    } else {
      let sortedArrA = A.sort((a, b) => a - b);
      let sortedArrB = B.sort((a, b) => a - b);
      for (let i = 0; i < A.length; i++) {
        if (sortedArrA[i] !== sortedArrB[i]) {
          return 0;
        }
      }

      return 1;
    }

    // Another way of doing it
    // let sortedArrA = A.sort((a, b) => a - b);
    // let sortedArrB = B.sort((a, b) => a - b);

    // if(JSON.stringify(sortedArrA)!==JSON.stringify(sortedArrB)) {
    //     return 0;
    // } else {
    //     return 1;
    // }
  }
}

class Solution {
  firstElementKTime(arr, n, k) {
    //code here

    /*
      Worked Partially
      for(let i=0; i<n; i++){
          let noOfOccurrences = 0;
          
          for(let j=0; j<n; j++) {
              if(arr[i] === arr[j]) {
                  noOfOccurrences++;
              }
          }
          
          if(noOfOccurrences===k) {
              return arr[i];
          }
      }
      */

    let obj = {};

    for (let i = 0; i < n; i++) {
      let num = arr[i];

      if (obj[num]) {
        obj[num]++;
      } else {
        obj[num] = 1;
      }

      // above if else in one line below
      // obj[arr[i]] = (obj[arr[i]] || 0) + 1 ;

      if (obj[arr[i]] === k) {
        return arr[i];
      }
    }
    return -1;
  }
}

class Solution {
  getOddOccurrence(arr, n) {
    //code here
    const numsMap = new Map();
    for (let i = 0; i < n; i++) {
      if (numsMap.has(arr[i])) {
        numsMap.set(arr[i], numsMap.get(arr[i]) + 1);
      } else {
        numsMap.set(arr[i], 1);
      }
    }
    // console.log(numsMap);

    for (const [key, value] of numsMap) {
      if (value % 2 !== 0) {
        return key;
      }
    }
  }
}

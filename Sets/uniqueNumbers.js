class Solution {
  uniqueNumbers(L, R) {
    //code here
    for (let i = L; i <= R; i++) {
      const numsSet = new Set();
      const numStr = i.toString();

      let isUnique = true;
      for (let num of numStr) {
        if (numsSet.has(num)) {
          isUnique = false;
          break;
        }
        numsSet.add(num);
      }

      if (isUnique) {
        console.log(i);
      }
    }
  }
}

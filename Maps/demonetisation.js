class Solution {
  //Function to find the minimum number of denominations.
  demonitize(S, m, n) {
    //your code here
    const occurrences = new Map();

    occurrences.set(m, (occurrences.get(m) || 0) + 1);
    occurrences.set(n, (occurrences.get(n) || 0) + 1);

    let result = "";
    for (let i = 0; i < S.length; i++) {
      let substring = "";
      for (let [key, value] of occurrences) {
        const fragment = S.substr(i, key.length);
        if (fragment === key) {
          i += key.length - 1;
          value--;
        } else {
          substring += S[i];
        }
      }
      result += substring;
    }

    if (result === "") {
      return -1;
    } else {
      return result;
    }
  }
}

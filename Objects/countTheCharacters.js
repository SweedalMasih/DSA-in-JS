class Solution {
  getCount(S, N) {
    //code here

    //   Taken from geeksforgeeks
    let temp = {};
    let count = 0;
    for (let i = 0; i < S.length; i++) {
      if (!temp[S[i]]) temp[S[i]] = 1;
      else if (S[i - 1] != S[i]) temp[S[i]]++;
    }
    let t = Object.keys(temp);
    let k = t.length;
    for (let i = 0; i < k; i++) {
      if (temp[t[i]] == N) count++;
    }
    return count;
  }
}

class Solution {
  countSubstringWithEqualEnds(s) {
    //code here
    const subStrCount = new Map();
    let count = 0;

    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];

      subStrCount.set(currentChar, (subStrCount.get(currentChar) || 0) + 1);

      count = count + subStrCount.get(currentChar);
    }
    return count;
  }
}

class Solution {
  //Function to reverse a string.
  reverseString(s) {
    //your code here
    const uniqueChars = new Set();
    let reversedUniqueStr = "";
    for (let i = s.length - 1; i >= 0; i--) {
      const currentChar = s[i];

      if (currentChar !== " " && !uniqueChars.has(currentChar)) {
        reversedUniqueStr = reversedUniqueStr + currentChar;
        uniqueChars.add(currentChar);
      }
    }
    return reversedUniqueStr;
  }
}

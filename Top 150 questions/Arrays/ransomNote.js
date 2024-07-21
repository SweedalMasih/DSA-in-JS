var canConstruct = function (ransomNote, magazine) {
  // this approach only checks for contiguous substring
  /*
  const substrings = new Map();
  const length = magazine.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      substrings.set(magazine.slice(i, j), true);
    }
  }

  if (substrings.has(ransomNote)) return true;

  return false;
  */

  // correct approach

  const charCount = new Map();

  for (const char of magazine) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  for (const char of ransomNote) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }

  return true;
};

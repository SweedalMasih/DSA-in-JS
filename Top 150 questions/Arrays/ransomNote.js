var canConstruct = function (ransomNote, magazine) {
  // this approach only checks for contiguous substring
  const substrings = new Map();
  const length = magazine.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      substrings.set(magazine.slice(i, j), true);
    }
  }

  if (substrings.has(ransomNote)) return true;

  return false;
};

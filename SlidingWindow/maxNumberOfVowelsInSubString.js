var maxVowels = function (s, k) {
  if (k > s.length) return null;

  let maxCount = 0;
  let tempCount = 0;

  for (let i = 0; i < k; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      maxCount += 1;
    }
  }

  console.log(maxCount);

  tempCount = maxCount;

  for (let i = k; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      tempCount = tempCount + 1;
    }

    if (
      s[i - k] === "a" ||
      s[i - k] === "e" ||
      s[i - k] === "i" ||
      s[i - k] === "o" ||
      s[i - k] === "u"
    ) {
      tempCount = tempCount - 1;
    }

    maxCount = Math.max(maxCount, tempCount);
  }

  return maxCount;
};

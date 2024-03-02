var numDifferentIntegers = function (word) {
  const digitMap = new Map();

  for (let i = 0; i < word.length; i++) {
    if (word[i] >= 0 && word[i] <= 9) {
      let num = word[i];

      let nextCharIndex = i + 1;

      while (
        nextCharIndex < word.length &&
        word[nextCharIndex] >= 0 &&
        word[nextCharIndex] <= 9
      ) {
        num = num + word[nextCharIndex];
        nextCharIndex++;
      }
      console.log(num, nextCharIndex);
      if (!digitMap.has(parseInt(num, 10))) {
        digitMap.set(parseInt(num, 10));
      }
      i = nextCharIndex - 1;
    }
  }
  // console.log(digitMap)
  return digitMap.size;
};

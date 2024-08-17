var findWordsContaining = function (words, x) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const charArr = words[i].split("");
    for (let j = 0; j < charArr.length; j++) {
      if (x === charArr[j]) {
        result.push(i);
        break;
      }
    }
  }
  return result;
};

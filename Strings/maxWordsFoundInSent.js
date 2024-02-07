var mostWordsFound = function (sentences) {
  let maxWords = 0;
  for (let i = 0; i < sentences.length; i++) {
    const str = sentences[i];
    const arr = str.split(" ");
    // console.log(arr, arr.length)
    if (arr.length >= maxWords) {
      maxWords = arr.length;
    }
  }
  return maxWords;
};

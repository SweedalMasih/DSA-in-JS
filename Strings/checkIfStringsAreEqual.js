var arrayStringsAreEqual = function (word1, word2) {
  const str1 = word1.join("");
  const str2 = word2.join("");

  // console.log(str1, str2);

  if (str1 === str2) {
    return true;
  }
  return false;
};

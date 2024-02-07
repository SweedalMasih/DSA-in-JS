var isAcronym = function (words, s) {
  if (words.length !== s.length) {
    return false;
  }

  let str = "";
  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i][0];
    str = str + firstLetter;
    // console.log(str)
  }
  if (s === str) {
    return true;
  }
  return false;
};

var truncateSentence = function (s, k) {
  const strArr = s.split(" ");
  let str = "";
  // console.log(strArr);
  for (let i = 0; i < k; i++) {
    if (i === k - 1) {
      str = str + strArr[i];
    } else {
      str = str + strArr[i] + " ";
    }
  }
  // console.log(str)
  return str;
};

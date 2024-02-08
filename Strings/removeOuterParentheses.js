var removeOuterParentheses = function (s) {
  let count = 0;
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (count > 0) {
        newStr = newStr + "(";
      }
      count++;
    } else if (s[i] === ")") {
      count--;
      if (count > 0) {
        newStr = newStr + ")";
      }
    }
  }
  // console.log(newStr)
  return newStr;
};

var replaceDigits = function (s) {
  let str = "";
  function shift(c, x) {
    const charCode = c.charCodeAt(0);
    const char = String.fromCharCode(charCode + parseInt(x, 10));
    // console.log(charCode, char);
    return char;
  }
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      const digitToChar = shift(s[i - 1], s[i]);
      str = str + digitToChar;
    } else {
      str = str + s[i];
    }
    // console.log(str);
  }
  return str;
};

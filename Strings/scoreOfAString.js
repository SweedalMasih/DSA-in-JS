var scoreOfString = function (s) {
  const codes = [];
  for (let i = 0; i < s.length; i++) {
    codes.push(s[i].charCodeAt(s[i]));
  }

  console.log(codes);
  let result = 0;
  for (let i = 1; i < codes.length; i++) {
    const value = Math.abs(codes[i - 1] - codes[i]);
    result = result + value;
  }

  console.log(result);
  return result;
};

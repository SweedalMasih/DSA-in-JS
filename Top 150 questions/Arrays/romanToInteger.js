var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  const length = s.length;

  for (let i = 0; i < length; i++) {
    if (i < length - 1 && symbols[s[i]] < symbols[s[i + 1]]) {
      result -= symbols[s[i]];
    } else {
      result += symbols[s[i]];
    }
  }

  console.log(result);
  return result;
};

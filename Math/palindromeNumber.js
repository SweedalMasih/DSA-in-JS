var isPalindrome = function (x) {
  if (x < 0) return false;

  let duplicate = x;
  let revNum = 0;

  while (duplicate > 0) {
    const lastDigit = duplicate % 10;
    duplicate = Math.trunc(duplicate / 10);
    revNum = revNum * 10 + lastDigit;
  }

  return x === revNum;
};

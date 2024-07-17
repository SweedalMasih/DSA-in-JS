var reverse = function (x) {
  const duplicate = x;
  let revNum = 0;

  while (Math.abs(x) > 0) {
    const lastDigit = x % 10;
    x = Math.trunc(x / 10);
    revNum = revNum * 10 + lastDigit;
  }

  if (revNum < Math.pow(2, 31) * -1 || revNum > Math.pow(2, 31) - 1) return 0;

  return x < 0 ? -revNum : revNum;
};

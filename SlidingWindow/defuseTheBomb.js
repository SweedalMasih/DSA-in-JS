var decrypt = function (code, k) {
  const codeLength = code.length;
  const windowSum = [];
  const arr = code.concat(code);
  for (let i = 0; i < codeLength; i++) {
    let sum = 0;
    if (k >= 0) {
      for (let afterIndex = i + 1; afterIndex <= i + k; afterIndex++) {
        sum = sum + arr[afterIndex];
      }
      windowSum.push(sum);
    } else {
      for (let beforeIndex = i - 1; beforeIndex >= i + k; beforeIndex--) {
        const handleNegativeIndex =
          beforeIndex < 0 ? codeLength + beforeIndex : beforeIndex;
        // console.log(beforeIndex, handleNegativeIndex, sum)
        sum = sum + arr[handleNegativeIndex];
      }
      windowSum.push(sum);
    }

    // console.log(windowSum)
  }
  return windowSum;
};

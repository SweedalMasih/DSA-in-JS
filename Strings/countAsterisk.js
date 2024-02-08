var countAsterisks = function (s) {
  let asteriskCount = 0;
  let barCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (barCount % 2 === 0) {
      if (s[i] === "*") {
        asteriskCount++;
      }
    }
    if (s[i] === "|") {
      barCount++;
    }
  }
  // console.log(barCount, asteriskCount)
  return asteriskCount;
};

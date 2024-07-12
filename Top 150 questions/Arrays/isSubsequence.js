var isSubsequence = function (s, t) {
  let pointer1 = 0;
  let pointer2 = 0;
  let count = 0;

  while (pointer1 < s.length && pointer2 < t.length) {
    if (s[pointer1] === t[pointer2]) {
      count++;
      pointer1++;
    }

    pointer2++;
  }

  return count === s.length;
};

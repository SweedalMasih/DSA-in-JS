var isPalindrome = function (s) {
  s = s.toLowerCase();

  // regex which includes the underscore char: (/\W/g, '')
  // regex to remove underscore as well: (/[^0-9a-z]/gi, '')
  const str = s.replace(/ /g, "").replace(/[^0-9a-z]/gi, "");
  console.log(str);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};

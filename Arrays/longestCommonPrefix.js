const longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let common = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(common) !== 0) {
      common = common.slice(0, common.length - 1);
      if (common === "") return "";
    }
  }

  return common;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

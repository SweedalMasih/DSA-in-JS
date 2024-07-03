var lengthOfLastWord = function (s) {
  const strArr = s.split(" ");
  if (strArr.includes("")) {
    const filtered = strArr.filter((ele) => ele !== "");
    return filtered[filtered.length - 1].length;
  }
  return strArr[strArr.length - 1].length;
};

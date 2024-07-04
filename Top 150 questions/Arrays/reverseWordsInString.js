var reverseWords = function (s) {
  const strArr = s.split(" ");
  const filteredArr = strArr.filter((ele) => ele !== " ");
  let reversedStr = "";

  for (let i = filteredArr.length - 1; i >= 0; i--) {
    if (filteredArr[i] === "") continue;
    reversedStr += `${filteredArr[i]} `;
  }

  return reversedStr.trim();
};

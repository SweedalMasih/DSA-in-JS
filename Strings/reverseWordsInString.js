var reverseWords = function (s) {
  const strArr = s.split(" ");
  let result = "";
  for (let i = 0; i < strArr.length; i++) {
    const reversedStr = strArr[i].split("").reverse().join("");
    result = result + reversedStr + " ";
    // console.log(result);
  }
  return result.trim();
};

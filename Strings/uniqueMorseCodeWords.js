var uniqueMorseRepresentations = function (words) {
  const codes = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const codesObj = {};
  codes.forEach((ele, index) => {
    const letter = String.fromCharCode(97 + index);
    codesObj[letter] = ele;
  });
  // console.log(codesObj)

  let result = [];
  for (let i = 0; i < words.length; i++) {
    const wordArr = words[i].split("");
    // console.log(wordArr);
    let wordMapsTo = "";
    for (let j = 0; j < wordArr.length; j++) {
      const letterMapsTo = codesObj[wordArr[j]];
      wordMapsTo = wordMapsTo + letterMapsTo;
    }
    // console.log(wordMapsTo);
    result.push(wordMapsTo);
  }
  const uniqueTransformations = new Set(result);
  // console.log(uniqueTransformations);
  return uniqueTransformations.size;
};

var checkIfPangram = function (sentence) {
  if (sentence.length < 26) {
    return false;
  }

  const newStr = sentence.toLowerCase();
  for (let i = 97; i <= 122; i++) {
    const char = String.fromCharCode(i);

    if (!newStr.includes(char)) {
      return false;
    }
  }
  return true;
};

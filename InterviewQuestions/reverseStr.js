function reverseString(str) {
  let reversed = "";
  const length = str.length;

  for (let i = length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  console.log(reversed);
  return reversed;
}

const s = "hello";
reverseString(s);

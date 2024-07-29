function reverseInPlace(input) {
  let stack = [];
  let reverse = "";
  let current = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char !== " ") {
      stack.push(char);
    } else {
      while (stack.length > 0) {
        current += stack.pop();
      }
      reverse += current + " ";
      current = "";
    }
  }

  while (stack.length > 0) {
    current += stack.pop();
  }
  reverse += current;

  console.log(reverse);
  return reverse;
}

reverseInPlace("Hello World");

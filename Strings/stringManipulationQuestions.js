// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

function reverseSentence(input) {
  const length = input.length;
  let str = "";

  for (let i = length - 1; i >= 0; i--) {
    str += input[i];
  }

  console.log(str);
  return str;
}

reverseSentence("hello amit anyyyy");

function removeDuplicates(input) {
  /*
    // using set
    const myStr = new Set(input);
    console.log([...myStr].join(""))
    */

  const length = input.length;
  let str = "";

  for (let i = 0; i < input.length; i++) {
    if (!str.includes(input[i])) {
      str += input[i];
    }
  }
  console.log(str);
}

removeDuplicates("geEksforGEeks");
removeDuplicates("HaPpyNewYear");

function isBalanced(input) {
  const bracketsObj = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    const bracket = input[i];

    if (bracketsObj[bracket]) {
      stack.push(bracket);
    } else {
      const top = stack.pop();

      if (bracketsObj[top] !== bracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("{([])}"));
console.log(isBalanced("()"));
console.log(isBalanced("([]"));

function moveZeros(n, arr) {}

moveZeros(5, [3, 5, 0, 0, 4]);
moveZeros(4, [0, 0, 0, 4]);
moveZeros(3, [10, 2, 4]);

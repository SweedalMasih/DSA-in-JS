function binaryCombinations(n) {
  if (n === 0) return 1;
  if (n === 1) return 2;

  return binaryCombinations(n - 2) + binaryCombinations(n - 1);
}

console.log(binaryCombinations(3));

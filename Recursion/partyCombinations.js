function partyCombinations(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return (
    partyCombinations(n - 1) +
    partyCombinations(n - 1) * partyCombinations(n - 2)
  );
}

console.log(partyCombinations(3));
console.log(partyCombinations(4));

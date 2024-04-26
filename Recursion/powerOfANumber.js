function power(a, n) {
  if (n === 0) return 1;

  return a * Math.pow(a, n - 1);
}

console.log(power(6, 3));
// Output: 216

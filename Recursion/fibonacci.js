function fibonacci(n) {
  if (n <= 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function fibonacci2(n) {
  if (n === 1) return 0;

  if (n === 2) return 1;

  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

console.log(fibonacci2(7));
// Output: 8
function fib(n) {
  const arr = Array(n + 1).fill(0);

  if (n <= 1) {
    arr[n] = n;
  } else {
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }

  return arr[n];
}

console.log(fib(5));
console.log(fib(7));
console.log(fib(1));

// memoized way

function fibRecursive(n, memo = []) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  return memo[n];
}

console.log(fibRecursive(5));
console.log(fibRecursive(7));
console.log(fibRecursive(1));

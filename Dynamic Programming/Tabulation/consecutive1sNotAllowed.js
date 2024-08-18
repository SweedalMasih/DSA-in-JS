class Solution {
  countStrings(n, memo = []) {
    const MOD = 10 ** 9 + 7;

    if (n === 1) return 2;
    if (n === 2) return 3;

    const result = [];
    result[1] = 2;
    result[2] = 3;

    for (let i = 3; i <= n; i++) {
      result[i] = (result[i - 1] + result[i - 2]) % MOD;
    }

    return result[n];
  }
}

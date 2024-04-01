function increasing(n) {
  if (n === 0) return;

  increasing(n - 1); // This will be called recursively first, then the consoles will be printed at the end
  console.log(n);
}

function decreasing(n) {
  if (n === 0) return;

  console.log(n);
  decreasing(n - 1);
}

increasing(5);
decreasing(5);

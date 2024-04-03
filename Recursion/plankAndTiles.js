function plankAndTiles(n) {
  if (n <= 3) {
    return 1;
  }

  if (n === 4) {
    return 2;
  }

  return plankAndTiles(n - 1) + plankAndTiles(n - 4);
}

console.log(plankAndTiles(5));

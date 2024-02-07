var finalValueAfterOperations = function (operations) {
  const length = operations.length;
  let X = 0;
  for (let i = 0; i < length; i++) {
    if (operations[i] === "++X" || operations[i] === "X++") {
      X = X + 1;
    } else {
      X = X - 1;
    }
  }
  // console.log(X)
  return X;
};

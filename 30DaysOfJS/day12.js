var addTwoPromises = async function (promise1, promise2) {
  const a = await promise1;
  const b = await promise2;
  console.log(a, b);
  return a + b;
};

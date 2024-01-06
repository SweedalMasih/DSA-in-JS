var getDecimalValue = function (head) {
  let current = head;
  let arr = [current.val];

  while (current.next) {
    let next = current.next;
    arr.push(next.val);
    current = next;
  }

  let length = arr.length;
  let decimalValue = 0;

  for (let i = 0; i < length; i++) {
    let result;
    result = Math.pow(2, i) * arr[length - 1 - i];
    decimalValue = decimalValue + result;
    // console.log(result, decimalValue);
  }

  return decimalValue;
};

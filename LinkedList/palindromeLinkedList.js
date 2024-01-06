var isPalindrome = function (head) {
  let current = head;
  let arr = [current.val];

  while (current.next) {
    let next = current.next;
    arr.push(next.val);
    current = next;
  }

  // console.log(arr, arr.length);

  let length = arr.length;
  for (let i = 0; i <= length / 2; i++) {
    if (arr[i] !== arr[length - 1 - i]) {
      let reverseIndex = arr[length - 1 - i];
      console.log("From start " + i + " From back " + reverseIndex);
      return false;
    }
  }
  return true;
};

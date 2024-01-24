var deleteMiddle = function (head) {
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // console.log(prev.next, slow.val, slow.next)

  if (prev) {
    prev.next = slow.next;
  } else {
    head = slow.next;
  }
  // console.log(head)
  return head;
};

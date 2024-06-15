var detectCycle = function (head) {
  // this will take extra memory
  if (!head || !head.next) return null;

  const map = new Map();
  let current = head;

  while (current) {
    if (map.has(current)) {
      return current;
    }

    map.set(current, true);
    current = current.next;
  }
  return null;

  // better approach
  /*
  if(!head || !head.next) return null;
  let slow = head;
  let fast = head;
  let hasCycle = false;

  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
          hasCycle = true;
          break;
      }
  }

  if(!hasCycle) return null;

  let current = head;

  while(hasCycle && slow!=current){
      slow = slow.next;
      current = current.next;
  }

  return current;
  */
};

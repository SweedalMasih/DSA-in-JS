class Solution {
  sortedInsert(head, x) {
    //code here
    const newNode = new Node(x);

    if (!head || x <= head.data) {
      newNode.next = head;
      if (head) {
        head.prev = newNode;
      }
      return newNode;
    }

    let current = head;
    while (current.next && current.next.data < x) {
      current = current.next;
    }

    newNode.next = current.next;
    newNode.prev = current;
    if (current.next) {
      current.next.prev = newNode;
    }
    current.next = newNode;

    return head;
  }
}

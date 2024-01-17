class Solution {
  //Function to insert a node in the middle of the linked list.
  insertInMiddle(head, x) {
    //your code here

    // if (!head) {
    //   head = x;
    // }
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer != null && fastPointer.next != null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }

    console.log(slowPointer);
  }
}

class Solution {
  //Function to count nodes of a linked list.
  getCount(head) {
    //your code here
    let length = 0;
    let current = head;

    while (current) {
      length = length + 1;
      current = current.next;
    }

    return length;
  }
}

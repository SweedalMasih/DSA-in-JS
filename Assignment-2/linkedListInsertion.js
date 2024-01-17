class Solution {
  //Function to insert a node at the beginning of the linked list.
  insertAtBegining(head, newData) {
    //your code here
    const new_node = new Node(newData);
    new_node.next = head;
    head = new_node;
  }
  //Function to insert a node at the end of the linked list.
  insertAtEnd(head, newData) {
    //your code here
  }
}

class Solution {
  //Function to insert a node at the beginning of the linked list.
  insertAtBegining(head, newData) {
    //your code here
    const node = new Node(newData);

    if (!head) {
      head = node;
      return head;
    }

    if (!head.next) {
      node.next = head;
      return head;
    }

    node.next = head;
    head = node;
    console.log("start", current, head);
  }
  //Function to insert a node at the end of the linked list.
  insertAtEnd(head, newData) {
    //your code here
    const node = new Node(newData);

    if (!head) {
      head = node;
      return head;
    }

    let current = head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
    console.log("end", current, head);
  }
}

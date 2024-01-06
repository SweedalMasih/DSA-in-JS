class Solution {
  display(head) {
    //code here
    let current = head;
    let str = "";

    while (current) {
      str = str + current.data + " ";
      current = current.next;
    }

    console.log(str);
  }
}

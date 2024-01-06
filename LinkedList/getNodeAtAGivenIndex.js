class Solution {
  GetNth(head, index) {
    //code here
    let current = head;
    for (let i = 1; i < index; i++) {
      // console.log(current.data);
      current = current.next;
    }

    return current.data;
  }
}

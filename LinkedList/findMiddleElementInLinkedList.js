class Solution {
  /* Should return data of middle node. If linked list is empty, then  -1*/
  getMiddle(node) {
    //your code here
    /*
        // brute force approach
        if(!node) {
            return -1;
        }
        
        let current = node;
        let arr = [current.data];
        let length = 1;
        
        while(current.next) {
            let next = current.next;
            arr.push(next.data);
            length++;
            current = next;
        }
        
        if(length%2 === 0){
            let mid = length/2;
            return arr[mid];
        } else {
            let mid = Math.floor(length/2);
            return arr[mid];
        }
        */

    // Floyd's algorithm

    let slow = node;
    let fast = node;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.data;
  }
}

class Solution {
  sumOfLastN_Nodes(head, n) {
    //code here

    /*
    MY SOLUTION
    let current = head;
    let arr = [current.data];
    let length = 1;
    
    
    while(current.next) {
        let next = current.next;
        arr.push(next.data);
        length++;
        current = current.next;
    }
    
    // console.log(arr, length, n);
    if(length===1) {
        return arr[0];
    } else if(length<3) {
        return arr[0] + arr[1];
    }
    
    let sum = 0;
    for(let i=length-1; i>=length-n; i--) {
        // console.log(i, arr[i])
        sum = sum + arr[i];
    }
    
    return sum;
    
    */

    // Suvrata's solution
    let length = 0;
    let currentNode = head;
    while (currentNode) {
      length++;
      currentNode = currentNode.next;
    }

    currentNode = head;
    let counter = 0,
      sum = 0;
    while (currentNode) {
      if (length - counter <= n) {
        sum = sum + currentNode.data;
      }
      counter++;
      currentNode = currentNode.next;
    }
    return sum;
  }
}

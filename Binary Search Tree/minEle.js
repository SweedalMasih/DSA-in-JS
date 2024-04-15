class Solution {
  // Function to find the minimum element in the given BST.
  minValue(root) {
    // your code here
    const queue = [root];
    const visited = [];

    while (queue.length > 0) {
      const node = queue.shift();
      visited.push(node.data);

      if (node.left !== null) {
        queue.push(node.left);
      }
      /*
          not needed as the smallest element will be always on the left side
          if(node.right !== null) {
              queue.push(node.right);
          }
          */
    }

    // console.log(visited);
    const min = Math.min(...visited);
    return min;
  }
}

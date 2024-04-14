class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left == null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right == null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
  bfs() {
    const queue = [this.root];
    const visited = [];

    while (queue.length > 0) {
      const node = queue.shift();
      visited.push(node.value);

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return visited;
  }

  DFSpreorder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return data;
  }

  DFSpostorder() {
    let data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  DFSinorder() {
    let data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
console.log(tree.bfs());
console.log(tree.DFSpreorder());
console.log(tree.DFSpostorder());
console.log(tree.DFSinorder());

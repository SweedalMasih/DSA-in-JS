class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    }
    return this.adjacencyList;
  }
}

const myGraph = new Graph();
console.log(myGraph.addNode(1));

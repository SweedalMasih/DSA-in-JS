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

  addEdge(node1, node2) {
    const sourceNode = this.adjacencyList.get(node1);
    const destNode = this.adjacencyList.get(node2);

    if (!sourceNode || !destNode) {
      return "one of the vertices is not present";
    }

    sourceNode.push(node2);
    destNode.push(node1);

    return this.adjacencyList;
  }

  removeEdge(node1, node2) {
    const sourceNode = this.adjacencyList.get(node1);
    const destNode = this.adjacencyList.get(node2);

    if (!sourceNode || !destNode) {
      return "one of the vertices is not present";
    }

    this.adjacencyList.set(
      node1,
      sourceNode.filter((edge) => edge !== node2)
    );

    this.adjacencyList.set(
      node2,
      destNode.filter((edge) => edge !== node1)
    );

    return this.adjacencyList;
  }

  removeVertex(node) {
    if (!this.adjacencyList.has(node)) {
      return "vertex is not present";
    }

    this.adjacencyList.delete(node);
    console.log("no of vertices present", this.adjacencyList.size);

    if (this.adjacencyList.size > 0) {
      for (const [key, value] of this.adjacencyList.entries()) {
        if (value.includes(node)) {
          this.adjacencyList.set(
            key,
            value.filter((edge) => edge !== node)
          );
        }
      }
    }

    return this.adjacencyList;
  }

  traverse() {
    if (!this.adjacencyList) {
      return "no node is present";
    }

    console.log(this.adjacencyList);
  }
}

const myGraph = new Graph();
console.log(myGraph.addNode(1));
console.log(myGraph.addNode(2));
console.log(myGraph.addNode(3));
// console.log(myGraph.addNode(4));
console.log(myGraph.addEdge(1, 2));
console.log(myGraph.addEdge(2, 3));
console.log(myGraph.addEdge(3, 1));
// console.log(myGraph.addEdge(4,1));

// console.log(myGraph.removeEdge(1,2));
console.log(myGraph.removeVertex(1));

console.log(myGraph.traverse());

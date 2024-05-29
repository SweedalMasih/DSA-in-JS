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

  addEdge(node1, node2, weight) {
    const sourceNode = this.adjacencyList.get(node1);
    const destNode = this.adjacencyList.get(node2);

    if (!sourceNode || !destNode) {
      return "one of the vertices is not present";
    }

    sourceNode.push({ node2, weight });
    destNode.push({ node1, weight });

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

  traverseBFS(startNode) {
    if (!this.adjacencyList) {
      return "no node is present";
    }
    console.log(this.adjacencyList);

    const queue = [startNode];
    const nodes = [];
    const visitedMap = new Map();

    visitedMap.set(startNode, true);

    console.log("initial", visitedMap);
    while (queue.length) {
      const currVertex = queue.shift();
      nodes.push(currVertex);

      for (let connection of this.adjacencyList.get(currVertex)) {
        const nextNode =
          connection.node1 === currVertex ? connection.node2 : connection.node1;
        if (nextNode !== undefined && !visitedMap.has(nextNode)) {
          console.log("connection", { connection, nextNode, queue });
          visitedMap.set(nextNode, true);
          queue.push(nextNode);
        }
      }
    }
    return nodes;
  }

  dfsForGraphs(StartingVertex) {
    let visitedNodesArray = [];
    let trackofVisitedNodes = {};
    let list = this.adjacencyList;

    function traverse(vertex) {
      if (!vertex) {
        return null;
      }
      trackofVisitedNodes[vertex] = true;
      visitedNodesArray.push(vertex);
      list.get(vertex).forEach((connection) => {
        const nextNode =
          connection.node1 === vertex ? connection.node2 : connection.node1;
        if (!trackofVisitedNodes[nextNode]) {
          return traverse(nextNode);
        }
      });
    }
    traverse(StartingVertex);
    return visitedNodesArray;
  }
}

const myGraph = new Graph();
console.log(myGraph.addNode(1));
console.log(myGraph.addNode(2));
console.log(myGraph.addNode(3));
// console.log(myGraph.addNode(4));
console.log(myGraph.addEdge(1, 2, 5));
console.log(myGraph.addEdge(2, 3, 8));
console.log(myGraph.addEdge(3, 1, 10));
// console.log(myGraph.addEdge(4, 1));

// console.log(myGraph.removeEdge(1,2));
// console.log(myGraph.removeVertex(1));

console.log(myGraph.traverseBFS(1));
console.log(myGraph.dfsForGraphs(1));

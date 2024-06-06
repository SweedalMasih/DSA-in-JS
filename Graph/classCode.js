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
/*
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
*/
console.log(myGraph.addNode(1));
console.log(myGraph.addNode(2));
console.log(myGraph.addEdge(1, 2));
console.log(myGraph.addNode(3));
console.log(myGraph.addNode(4));
console.log(myGraph.addEdge(3, 4));
console.log(myGraph.addEdge(2, 3));
console.log(myGraph.addEdge(1, 4));
// console.log(myGraph.removeVertex(1));
console.log(myGraph.removeEdge(1, 4));

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    } else {
      return "Vertex is already present";
    }
    return this.adjacencyList;
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
      return "Vertex is not present";
    }

    const source = this.adjacencyList.get(vertex1);
    const dest = this.adjacencyList.get(vertex2);

    source.push(vertex2);
    dest.push(vertex1);

    return this.adjacencyList;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return "Vertex is not present";
    }

    this.adjacencyList.delete(vertex);

    if (this.adjacencyList.size > 0) {
      for (const [key, value] of this.adjacencyList.entries()) {
        console.log(value);
        if (value.includes(vertex)) {
          this.adjacencyList.set(
            key,
            value.filter((neighbour) => neighbour !== vertex)
          );
        }
      }
    }
    return this.adjacencyList;
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
      return "Vertex is not present";
    }

    const source = this.adjacencyList.get(vertex1);
    const dest = this.adjacencyList.get(vertex2);

    if (source.includes(vertex2)) {
      this.adjacencyList.set(
        vertex1,
        source.filter((neighbour) => neighbour !== vertex2)
      );
    }

    if (dest.includes(vertex1)) {
      this.adjacencyList.set(
        vertex2,
        dest.filter((neighbour) => neighbour !== vertex1)
      );
    }

    return this.adjacencyList;
  }

  bfs(startNode) {
    const visited = new Set();
    const queue = [startNode];
    visited.add(startNode);

    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);

      this.adjacencyList.get(vertex).forEach((neighbour) => {
        if (!visited.has(neighbour)) {
          queue.push(neighbour);
          visited.add(neighbour);
        }
      });
    }
  }

  dfs(startNode, visited = new Set()) {
    visited.add(startNode);
    console.log(startNode);

    this.adjacencyList.get(startNode).forEach((neighbour) => {
      if (!visited.has(neighbour)) return this.dfs(neighbour, visited);
    });
  }
}

const graph = new Graph();
console.log(graph.addVertex(1));
console.log(graph.addVertex(2));
console.log(graph.addEdge(1, 2));
console.log(graph.addVertex(3));
console.log(graph.addVertex(4));
console.log(graph.addEdge(3, 4));
console.log(graph.addEdge(2, 3));
console.log(graph.addEdge(1, 4));
// console.log(graph.removeVertex(1));
// console.log(graph.removeEdge(1, 4));

console.log(graph.bfs(1));
console.log(graph.dfs(1));

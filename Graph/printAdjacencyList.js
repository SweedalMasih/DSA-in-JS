class Solution {
  printGraph(V, edges) {
    // code here
    const adjacencyList = [];

    for (let i = 0; i < V; i++) {
      adjacencyList.push([]);
    }

    // for (const edge of edges) {

    //     const [u,v] = edge;

    //     adjacencyList[u].push(v);
    //     adjacencyList[v].push(u);
    // }

    edges.forEach((edge) => {
      const [u, v] = edge;

      adjacencyList[u].push(v);
      adjacencyList[v].push(u);
    });

    return adjacencyList;
  }
}

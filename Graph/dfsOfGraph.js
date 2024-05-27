class Solution {
  // Function to return a list containing the DFS traversal of the graph.
  dfsOfGraph(V, adj) {
    // code here

    let visitedNodesArr = [];
    let trackOfVisitedNodes = {};

    function traverse(vertex) {
      if (!vertex) return null;

      trackOfVisitedNodes[vertex] = true;
      visitedNodesArr.push(vertex);

      for (let conn of adj[vertex]) {
        if (!trackOfVisitedNodes[conn]) {
          traverse(conn);
        }
      }
    }

    traverse("0");

    return visitedNodesArr;
  }
}

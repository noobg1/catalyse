const isDebug = process.env.DEBUG;

const _calculateWeight = (weightsMap, visitedMap) => { // eslint no-underscore-dangle
  const reducer = (accumulator, weightKey) => accumulator + (visitedMap[weightKey] ? weightsMap[weightKey] : 0);
  return Object.keys(weightsMap).reduce(reducer, 0);
};

const _DFSTraversal = (startNode, visitedMap, edgesMap, weightsMap, path) => {
  // Mark start node as visted
  visitedMap[startNode] = true;

  const adjacentNodes = edgesMap[startNode];

  if (adjacentNodes) {
    // Track path
    path.push(startNode);

    // Traverse linking nodes
    for (const node of adjacentNodes) {
      if (!visitedMap[node]) {
        // If node visited then continue DFS
        const unvisitedNode = node;
        _DFSTraversal(unvisitedNode, visitedMap, edgesMap, weightsMap, path);
      }
    }
  }
};

// check if Valid input
const _isValidInput = (startNode, nodesList, edgesMap) => startNode && nodesList.length && Object.keys(edgesMap).length;

const findMaximalPath = (startNode, weightsMap, edgesMap) => {
  const visitedMap = {};
  const nodesList = Object.keys(weightsMap);

  // checked input validity
  if (!_isValidInput(startNode, nodesList, edgesMap)) {
    return '';
  }

  // Mark all nodes as not visited
  nodesList.forEach(vertexKey => visitedMap[vertexKey] = false);

  // Track path
  const path = [];

  // DFS traversal by passing arguments as reference
  _DFSTraversal(startNode, visitedMap, edgesMap, weightsMap, path);

  if (Boolean(isDebug)) {
    return {
      path: path.join('->'),
      totalWeight: _calculateWeight(weightsMap, visitedMap)
    };
  }

  return path.join('->');
};

module.exports = {
  findMaximalPath
};

## Requirements

```
node@v8
```

##  Install test runner dependencies
```
npm i
```

## Run tests
```
npm run test
```

# Optimal Path

## Usage
```
const { findMaximalPath } = require('<PATH_TO> maximalPath.js');

const weightsMap = {
        a: 1,
        b: 2,
        c: 2
      };
 
const edgesMap = {
    a: ['b', 'c'],
    b: ['a'],
    c: []
};
const startVertex = 'a';

console.log('Optimal path => ', findMaximalPath(startVertex, weightsMap, edgesMap));

```

## Complexity analysis

1. Time complexity => O(V + E)
2. Space complexity => O(3V + E) => => O(V + E) => O(d) for connected graph

where V = vertices
      E = Edges
      d = depth

# Serialize Deserialize



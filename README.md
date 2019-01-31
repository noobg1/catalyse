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
const { findMaximalPath } = require('./optimalPath/src/maximalPath.js');

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

const result = findMaximalPath(startVertex, weightsMap, edgesMap);

```

## Complexity analysis

1. Time complexity => O(V + E)
2. Space complexity => O(3V + E) => => O(V + E) => O(d) for connected graph

where V = vertices \n
      E = Edges \n
      d = depth \n

# Serialize Deserialize

## Usage

Serialize (Store)
```
const { serialize } = require('./serializeDeserialize/src/serialize');

const input = [
    {
        key1: 'value1',
        key2: 'value2'
    },
    {
        keyA: 'valueA'
    }
];
const result = serialize(input);

```
## Complexity analysis Serialize

1. Time complexity => O(L * nM)
2. Space complexity => O(1) => inplace

where L = Length of array \n
      nM = number of hash maps \n
      

Deserialize (load) 
```
const { deserialize } = require('../src/deserialize');

const text = '1=2;3=4;5=6;7=8\n1=2;3=4;5=6;7=8';
      
const result = deserialize(text);

```

## Complexity analysis Deserialize

1. Time complexity => O(L)
2. Space complexity => O(nKV)

where L = Length of text \n
      nKV = number of key-value pairs
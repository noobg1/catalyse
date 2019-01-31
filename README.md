## Requirements

```
node@v8
```

##  Install test runner dependencies from project root
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

1. Time complexity => O(v + e)
2. Space complexity => O(ke + e) => => O(v + e) => O(d) for connected graph

```
where, 
    v = vertices
    e = Edges
    d = depth
    k = constant
```
# Serialize/Deserialize

## Usage

P.S: Assumption; There exists atleast one character of key or value on existence

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

1. Time complexity => O(l * m)
2. Space complexity => O(1) => inplace

```
where l = Length of array
      m = number of hash maps
```    

Deserialize (load) 
```
const { deserialize } = require('../src/deserialize');

const text = 'key1=value1;key2=value2\nkeyA=valueA\n';
      
const result = deserialize(text);

```

## Complexity analysis Deserialize

1. Time complexity => O(l)
2. Space complexity => O(n * (k + v)) => O(np)

```
where l = Length of text 
      n = number of key-value pairs
      k = Length of key
      v = length of value
      np = number of key-value pairs
```
const arr = [{ '1': '=2#$%^&*' }, { '5': '6', '3()_': '\\n4', ';7': '8' } ];
// [ { '1': '=2#$%^&*' }, { '5': '6', '3()_': '4', ';7': '8' } ]
// [ { '1': '=2' }, { '3': '4', '5': '6', ';7': '8' } ]
// [ { '1': '=2' } ]
// const arr = [ { key1: 'value1', key2: 'value2' }, { keyA: 'valueA' } ]
const serialize = (arrayOfMaps) => {
  const reducer = (accumulator, map) => {
    for (const key in map) {
      // console.log(accumulator, '((((((((((');
      accumulator += `${key}=${map[key]};`;
      // console.log(accumulator, '**********');
    }
    return `${accumulator}\\n`;
  };
  return arrayOfMaps.reduce(reducer, '');
};

console.log(serialize(arr));

module.exports = {
  serialize
};

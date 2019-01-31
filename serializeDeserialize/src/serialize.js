const serialize = (arrayOfMaps) => {
  const reducer = (accumulator, map) => {
    for (const key in map) {
      accumulator += `${key}=${map[key]};`;
    }
    const strippedAccumulator = accumulator.slice(0, -1);
    return `${strippedAccumulator}\n`;
  };
  return arrayOfMaps.reduce(reducer, '');
};

module.exports = {
  serialize
};

const serialize = (arrayOfMaps) => {
  const reducer = (accumulator, map) => {
    for (const key in map) {
      accumulator += `${key}=${map[key]};`;
    }

    return `${accumulator.replace(/.$/, '\n')}`; // replace last character with \n
  };
  return arrayOfMaps.reduce(reducer, '');
};

module.exports = {
  serialize
};

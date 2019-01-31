const delimitters = {
  '=': '=',
  ';': ';',
  '\n': '\n'
};

const delimittersMap = {
  NEXT_ARRAY: '\n',
  KEY_VAL_SEPERATOR: '=',
  MAP_SEPERATOR: ';'
};

const deserialize = (serializedText) => {
  let map = {};
  const serializedTextLength = serializedText.length;

  // empty string check
  if (serializedTextLength === 0) return {};

  const arrayList = [];
  let key = serializedText[0]; // initialize first element of text to string
  let value = ''; // value is empty
  let isKeyTrace = true;

  // if last character of string doesn't contain \n append the same
  if (serializedText.length - 1 !== '\n') {
    serializedText += '\n';
  }

  // iterate through text and build array map
  for (let interator = 1; interator < serializedText.length; interator += 1) {
    const presentCharacter = serializedText[interator];
    const previousCharacter = serializedText[interator - 1];

    if (delimitters[presentCharacter] && previousCharacter === presentCharacter) {
      // if current character is either of \n, ;, = and same as previous character
      if (key && !value) value += presentCharacter;
      else if (key && value) value += presentCharacter;
      else if (key) key += presentCharacter;
    } else if (presentCharacter === delimittersMap.NEXT_ARRAY && previousCharacter !== presentCharacter) {
      // case for carriage return
      map[key] = value;
      arrayList.push(map);
      map = {};
      key = interator === serializedText.length ? '' : serializedText[interator + 1];
      value = '';
      interator += 1;
      isKeyTrace = true;
    } else if (presentCharacter === delimittersMap.KEY_VAL_SEPERATOR) {
      isKeyTrace = false;
    } else if (presentCharacter === delimittersMap.MAP_SEPERATOR) {
      isKeyTrace = true;
      map[key] = value;
      key = serializedText[interator + 1];
      value = '';
      interator += 1;
    } else if (key && !isKeyTrace) {
      value += presentCharacter;
    } else if (key && isKeyTrace) {
      key += presentCharacter;
    } else if (!isKeyTrace) {
      value += presentCharacter;
    }
  }
  return arrayList;
};

module.exports = {
  deserialize
};

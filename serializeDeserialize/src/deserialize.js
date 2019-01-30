// const text = 'key1=value1;key2=value2\nkeyA=valueA\n';
// const text = '1=2;3=4;5=6;7=8\n1=2;3=4;5=6;7=8';
// const text = '1==2\n3=4;5=6;;7=8\n';
const text = '1==2#$%^&*\n\n3()_=4;5=6;;7=8\n';
// const rulesForNextTrack = {
//   isTrackKey: 'isTrackValue',
//   is
// };

const delimitters = {
  '=': '=',
  ';': ';',
  '\n': '\n'
};

const deserialize = (serializedText) => {
  let map = {};
  const arrayList = [];
  let key = serializedText[0];
  let value = '';
  let isKeyTrace = true;
  if (serializedText.length - 1 !== '\n') {
    serializedText += '\n';
  }
  for (let interator = 1; interator < serializedText.length; interator += 1) {
    const presentCharacter = serializedText[interator];
    const previousCharacter = serializedText[interator - 1];
    if (delimitters[presentCharacter] && previousCharacter === presentCharacter) {
      if (key && !value) value += presentCharacter;
      else if (key && value) value += presentCharacter;
      else if (key) key += presentCharacter;
    } else if (presentCharacter === '\n' && previousCharacter !== presentCharacter) {
      map[key] = value;
      arrayList.push(map);
      map = {};
      key = interator === serializedText.length ? '' : serializedText[interator + 1];
      value = '';
      interator += 1;
      isKeyTrace = true;
    } else if (presentCharacter === '=') {
      isKeyTrace = false;
    } else if (presentCharacter === ';') {
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
    } else {
      console.log('$$$$$$$$$$$$$$$$$$$$$$');
    }
  }
  return arrayList;
};

console.log(deserialize(text));

module.exports = {
  deserialize
};

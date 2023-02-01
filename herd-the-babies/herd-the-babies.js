// Please do not change the name of this function
function herdTheBabies (str) {
  // Your code here

  const letterTable = {
    'A': 0,
    'a': 0,
    'B': 0,
    'b': 0,
    'C': 0,
    'c': 0,
    'D': 0,
    'd': 0,
  }

  str.split('').forEach( letter => letterTable[letter] += 1 );

  let buildingString = '';

  for ( const [letter, count] of Object.entries(letterTable) ) {
    for (let i = 0; i < count; i++) buildingString += letter;
  }

  return buildingString;
};

module.exports = herdTheBabies;

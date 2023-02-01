// Please do not change the name of this function
function sentenceToCamelCase (sentence, shouldCapitalise) {
  // Your code here
  
  const words = sentence.split(' ');

  const wordsCamelCased = words.map( word => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  } );

  if (!shouldCapitalise) {
    wordsCamelCased[0] = wordsCamelCased[0][0].toLowerCase() + wordsCamelCased[0].substring(1);
  }

  return wordsCamelCased.join('');
};

module.exports = sentenceToCamelCase;

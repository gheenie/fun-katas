// Please do not change the name of this function
function sentenceToCamelCase (sentence, shouldUpperCC) {
  // Your code here
  
  const words = sentence.split(' ');

  const wordsUpperCCed = words.map( (word) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  } );

  if (!shouldUpperCC) {
    wordsUpperCCed[0] = wordsUpperCCed[0][0].toLowerCase() + wordsUpperCCed[0].substring(1);
  }

  return wordsUpperCCed.join('');
};

module.exports = sentenceToCamelCase;

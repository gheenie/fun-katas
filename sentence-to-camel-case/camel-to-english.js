// Please do not change the name of this function
function camelToEnglish(camelCasedSentence) {
  // Your code here
  
  const englishSentence = camelCasedSentence.replace(/([A-Z])/g, ' $1').trim();

  return englishSentence[0].toUpperCase() + englishSentence.substring(1).toLowerCase() + '.';
  
  const wordsUpperCCed = words.map( (word) => {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  } );

  if (!shouldUpperCC) {
    wordsUpperCCed[0] = wordsUpperCCed[0][0].toLowerCase() + wordsUpperCCed[0].substring(1);
  }

  return wordsUpperCCed.join('');
};

module.exports = camelToEnglish;

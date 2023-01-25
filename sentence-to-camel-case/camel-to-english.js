// Please do not change the name of this function
function camelToEnglish(camelCasedSentence) {
  // Your code here
  
  const englishSentence = camelCasedSentence.replace(/([A-Z])/g, ' $1').trim();

  return englishSentence[0].toUpperCase() + englishSentence.substring(1).toLowerCase() + '.';
};

module.exports = camelToEnglish;

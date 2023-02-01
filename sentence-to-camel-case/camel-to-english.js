// Please do not change the name of this function
function camelToEnglish(camelCasedSentence) {
  // Your code here
  
  // Find all capitals, insert space before each.
  const spaceInFrontOfCapitals = camelCasedSentence.replace(/([A-Z])/g, ' $1').trim();

  return spaceInFrontOfCapitals[0].toUpperCase() + spaceInFrontOfCapitals.substring(1).toLowerCase() + '.';
};

module.exports = camelToEnglish;

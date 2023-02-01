// Please do not change the name of this function
function pigLatin(str) {
  // Your code here

  if (str === '') return '';

  if (str.indexOf(' ') === -1) {
    if ( /^[AEIOUaeiou]/.test(str) ) return str + 'way';

    const frontConsonants = str.match(/^[^AEIOUaeiou]+/)[0];
    
    return str.substring(frontConsonants.length) + frontConsonants + 'ay';
  }

  const splitWords = str.split(' ');

  return splitWords.map(word => pigLatin(word)).join(' ');
};

module.exports = pigLatin

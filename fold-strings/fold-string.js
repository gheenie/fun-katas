const reverse = require('../../fun-recursion/katas/3-reverse');

// Please do not change the name of this function
function foldString (str) {
  // Your code here

  const words = str.split(' ');
  
  const foldedWords = words.map( (word) => {
    const wordLength = word.length;

    if (wordLength < 4) return word;

    if (wordLength % 2 === 0) {
      const secondMidIndex = wordLength / 2;
      const frontHalfOfWord = word.substring(0, secondMidIndex);
      const backHalfOfWord = word.substring(secondMidIndex);

      return reverse(frontHalfOfWord) + reverse(backHalfOfWord);
    }

    if (wordLength % 2 === 1) {
      const midIndex = Math.trunc(wordLength / 2);
      const frontHalfOfWord = word.substring(0, midIndex);
      const midChar = word[midIndex];
      const backHalfOfWord = word.substring(midIndex + 1);

      return reverse(frontHalfOfWord) + midChar + reverse(backHalfOfWord);
    }
  } );

  return foldedWords.join(' ');
};

module.exports = foldString

// Please do not change the name of this function
function morseCode (str) {
  // Your code here

  const morseCodeTable = {
    '.-' : 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9'
  };

  if (str === '') return '';

  if ( str.indexOf(' ') === -1 ) return morseCodeTable[str];

  if ( str.indexOf('   ') === -1 ) return str.split(' ').map( morseLetter => morseCode(morseLetter) ).join('');

  return str.split('   ').map( morseWord => morseCode(morseWord) ).join(' ');
};

module.exports = morseCode;

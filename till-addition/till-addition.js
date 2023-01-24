function roundTo2Decimals(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}

// Please do not change the name of this function
function tillAddition (cash) {
  // Your code here

  const till = {
    "1p": 0,
    "2p": 0,
    "5p": 0,
    "10p": 0,
    "20p": 0,
    "50p": 0,
    "£1": 0,
    "£2": 0,
    "£5": 0,
    "£10": 0,
    "£20": 0,
    "£50": 0
  };

  for ( const [denomination, count] of Object.entries(cash) ) {
    till[denomination] += count;
  }

  let total = 0;

  for ( const [denomination, count] of Object.entries(till) ) {
    let faceValue = 0;
    
    if ( denomination.endsWith('p') ) {
      faceValue = Number( denomination.slice(0, -1) ) / 100;
    } else {
      faceValue = Number( denomination.substring(1) );
    }

    total += faceValue * count;
  }

  // floating point imprecision
  total = roundTo2Decimals(total);

  return `£${total}`;
};

module.exports = tillAddition;

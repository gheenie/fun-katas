// Please do not change the name of this function
function changeCalculator (num) {
  // Your code here

  const change = {};
  const denominators = [50, 20, 10, 5, 2];

  denominators.forEach( (denominator) => {
    change[denominator] = Math.trunc(num / denominator);
    num -= change[denominator] * denominator;
  } );

  change[1] = num;

  for ( const [denominator, count] of Object.entries(change) ) {
    if (count === 0) delete change[denominator];
  }

  return change;
};

module.exports = changeCalculator;

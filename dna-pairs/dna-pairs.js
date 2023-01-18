// Please do not change the name of this function
function dnaPairs(dna) {
  // Write your code here
  /*
  if (dna === '') {
    return [];
  }
  */

  const basePairs = {
    A: 'T', 
    T: 'A', 
    G: 'C', 
    C: 'G'
  };

  return dna.split('').map((base) => [base, basePairs[base]]);
}

module.exports = dnaPairs;

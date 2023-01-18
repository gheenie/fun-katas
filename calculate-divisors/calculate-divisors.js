// Please do not change the name of this function
function calculateDivisors(num) {
  // Your code here

  const countMultiplesOf3 = Math.floor((num - 1) / 3);
 
  const countMultiplesOf5 = Math.floor((num - 1) / 5);

  function nthTriangleNumber(n, firstNum = 1, lastNum = n) {
    return n * (firstNum + lastNum) / 2;
  }

  return 3 * nthTriangleNumber(countMultiplesOf3) + 5 * nthTriangleNumber(countMultiplesOf5);
}

module.exports = calculateDivisors;

// Please do not change the name of this function
function rotateArray (inputArr, num) {
  // Your code here

  const arr = JSON.parse( JSON.stringify(inputArr) );

  // Not strictly necessary.
  if (num === 0) return arr;

  let numOfFrontItems = 0;
  if (num > 0) numOfFrontItems = arr.length - num;
  if (num < 0) numOfFrontItems = num * -1;

  const frontOfArr = arr.splice(0, numOfFrontItems);
  
  return [...arr, ...frontOfArr];
};

module.exports =  rotateArray;

// Please do not change the name of this function
function updateRemoteStudents (arr) {
  // Your code here
  const students = JSON.parse( JSON.stringify(arr) );

  console.log(students);

  return students;
}

module.exports = updateRemoteStudents;

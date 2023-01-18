// Please do not change the name of this function
function updateRemoteStudents (arr) {
  // Your code here
  const students = JSON.parse( JSON.stringify(arr) );

  students.forEach((student) => {
    if (!student.hasOwnProperty('location')) {
      student['location'] = 'remote';
    }
  });

  return students;
}

module.exports = updateRemoteStudents;

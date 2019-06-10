/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

passingStudents(students); // => [ 'Kush', 'Ned' ]
*******************************************************************************/

function passingStudents(students) {
  var passing = [];
  for (var i = 0; i < students.length; i += 1) {
    var student = students[i];
    var grades = student["grades"];
      if (avg(grades) >= 70) {
        passing.push(student["name"]);
      } 
    }
    return passing;
}
function avg(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i += 1) {
    var student = array[i];
    sum += student["score"];
  }
  var avg = sum / array.length * 1.0;
  return avg; 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = passingStudents;

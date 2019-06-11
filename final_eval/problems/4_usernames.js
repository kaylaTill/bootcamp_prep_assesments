/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/

function usernames(names) {
  var usernames = [];
  for (var i = 0; i < names.length; i += 1) {
    var name = names[i];
    var fullName = name.split(" ");
    var firstName = fullName[0];
    var lastName = fullName[1];
    usernames.push((firstName[0] + lastName).toLowerCase());
  }
  return usernames;
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;

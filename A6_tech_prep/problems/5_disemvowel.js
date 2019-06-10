/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  var vowels = "aeiouAEIOU";
  var newStr = "";
  for (var i = 0; i < string.length; i += 1) {
    if (vowels.indexOf(string[i]) === -1 ) {
      newStr += string[i];
    } 
  }
  return newStr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;

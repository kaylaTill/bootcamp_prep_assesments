/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  var words = sentence.split(" ");
  var myWORDS = []; 
  for (var i = words.length; i >= 0;  i -= 1) {
    myWORDS.push(words[i]);
  }
  return myWORDS.join(" ").slice(1);

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;

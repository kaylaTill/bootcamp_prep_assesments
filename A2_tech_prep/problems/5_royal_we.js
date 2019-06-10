/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
  var words = sentence.split(" ");
  var mySen = [];


  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
      if (word === 'I') {
        mySen.push("we")
      } else if (word === 'my') {
        mySen.push("our")
      } else if (word === 'me') {
          mySen.push("us")
      } else if (word === 'mine') {
          mySen.push("ours")
      } else {
        mySen.push(word)
      }

  }
  return mySen.join(" ")

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;

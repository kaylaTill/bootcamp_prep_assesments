/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

function hipsterfy(sentence) {
  var words = sentence.split(" ");
  var newSen = [];

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];
    newSen.push(removeLastVowel(word));
  }
  return newSen.join(" ");
}

function removeLastVowel(word) {
  var new_word = "";
  vowels = "aeiou";

  for (var i = word.length; i >= 0 ; i -= 1) {
    var char = word[i];
    if (vowels.indexOf(char) > -1) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
  return word;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;

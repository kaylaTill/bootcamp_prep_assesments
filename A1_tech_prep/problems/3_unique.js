/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  var uniqArr = [];
  for (var i = 0; i < array.length; i += 1) {
    var ele = array[i];
    if (uniqArr.indexOf(ele) === -1) {
      uniqArr.push(ele);
    }
  }
  return uniqArr;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;

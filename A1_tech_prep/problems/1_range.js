/*******************************************************************************
Write a function range(start, end) that returns an array that contains all
numbers between 'start' and 'end' in sequential order.

Examples:

range(1,4) => [1,2,3,4]
range(4,2) => []
*******************************************************************************/

function range(start, end) {
  var  ranges = [];
  for (var i = start; i <= end; i += 1) {
    ranges.push(i);
  }
  return ranges;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range;

/*******************************************************************************
Write a function numberPrimes(n) that takes in a number, `n`. The function should
return the number of prime numbers less than or equal to `n`. For example,
there are 4 prime numbers less that or equal to 10: 2, 3, 5, 7.

Examples:

numberPrimes(10); // => 4
numberPrimes(12); // => 5
numberPrimes(20); // => 8
numberPrimes(100); // => 25
*******************************************************************************/

function numberPrimes(n) {
  var primes = [];
  for (var i = 0; i <= n; i += 1) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes.length;

}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numberPrimes;

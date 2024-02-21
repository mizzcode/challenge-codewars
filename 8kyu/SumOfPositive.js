/**
 * Day 4/365.
 * https://www.codewars.com/kata/5715eaedb436cf5606000381
 * @returns the sum of all of the positives ones. if there is nothing to sum, the sum is default to 0.
 */

function positiveSum(arr) {
  if (arr.length < 1) return 0

  return arr.reduce((acc, curr) => (curr > 0 ? (acc += curr) : (acc += 0)), 0)
}

console.log(positiveSum([]))
console.log(positiveSum([-1, 2, 3, 5, -1]))
console.log(positiveSum([-1, 2, 3, 4, -5]))

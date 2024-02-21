/**
 * Day 4/365.
 * https://www.codewars.com/kata/577a98a6ae28071780000989
 * @returns the largest and lowest number in that list, respectively.
 */

// const min = function (list) {
//   const min = list.sort((a, b) => a - b)
//   return min[0]
// }

// const max = function (list) {
//   const max = list.sort((a, b) => b - a)
//   return max[0]
// }
const min = function (list) {
  return Math.min(...list)
}

const max = function (list) {
  return Math.max(...list)
}

console.log(min([1, 2, 3, 4, 5]))
console.log(max([1, 2, 3, 4, 5, 1, 99, 0, 76]))

/**
 * Day 2/365.
 * https://www.codewars.com/kata/55685cd7ad70877c23000102
 * @returns negative when number is positive, return 0 if number is zero!
 */

// function makeNegative(num) {
//   // Code?
//   if (num < 0) {
//     return num
//   } else if (num === 0) {
//     return 0
//   } else {
//     return -num
//   }
// }

function makeNegative(num) {
  // Code?
  return num <= 0 ? num : -num
}

console.log(makeNegative(1201))

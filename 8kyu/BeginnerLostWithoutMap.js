/**
 * Day 6/365.
 * https://www.codewars.com/kata/57f781872e3d8ca2a000007e
 * Given an array of integers
 * @returns a new array with each value doubled.
 */

// function maps(x){
//   const y = []
//   for (let i = 0; i < x.length; i++) {
//     y.push(x[i] * 2)
//   }
//   return y
// }

function maps(x) {
  return x.map((y) => y * 2)
}

console.log(maps([1,2,3]))
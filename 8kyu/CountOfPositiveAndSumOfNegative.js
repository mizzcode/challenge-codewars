/**
 * Day 6/365.
 * https://www.codewars.com/kata/576bb71bbbcf0951d5000044
 * @returns an array, where the first element is the count of positives numbers 
 * and the second element is sum of negative numbers. 0 is neither positive nor negative.
 */

function countPositivesSumNegatives(input) {
  // your code here
  if (input == null || input.length < 1) return []

  let countPositive = 0
  let sumNegative = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositive++
    } else if (input[i] < 0) {
      sumNegative += input[i]
    }
  }

  return [countPositive, sumNegative]
}

console.log(countPositivesSumNegatives([1,2,3,-1,-2,-3]))
console.log(countPositivesSumNegatives([]))
console.log(countPositivesSumNegatives(null))
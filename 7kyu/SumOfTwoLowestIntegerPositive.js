/**
 * Day 5/365.
 * https://www.codewars.com/kata/558fc85d8fd1938afb000014
 * Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
 * No floats or non-positive integers will be passed.
 * For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 * @returns sum two lowest integer positive
 */

// function sumTwoSmallestNumbers(numbers) {
//   //Code here
//   numbers.sort((a, b) => a - b)
//   return numbers[0] + numbers[1]
// }

function sumTwoSmallestNumbers(numbers) {
  //Code here
  const smallestOne = Math.min.apply(
    0,
    numbers.filter((num) => num > 0)
  )

  const smallestTwo = Math.min.apply(
    0,
    numbers.filter((num) => num > smallestOne)
  )

  return smallestOne + smallestTwo
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
console.log(sumTwoSmallestNumbers([511, 8, 12, 2, 22]))

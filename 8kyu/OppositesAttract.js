/**
 * Day 4/365.
 * https://www.codewars.com/kata/555086d53eac039a2a000083
 * Write a function that will take the number of petals of each flower
 * @returns true if they are in love and false if they aren't..
 */

function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 === 0) {
    return false
  } else if (flower1 % 2 === 1 && flower2 % 2 === 1) {
    return false
  } else {
    return true
  }
}

console.log(lovefunc(781, 165))

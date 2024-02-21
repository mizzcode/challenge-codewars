/**
 * Day 2/365.
 * https://www.codewars.com/kata/5ab6538b379d20ad880000ab
 * @returns If it is a square, return its area. If it is a rectangle, return its perimeter.!
 */

const areaOrPerimeter = function (l, w) {
  // Return your answer
  if (l === w) return l * w
  return (l + w) * 2
}

console.log(areaOrPerimeter(6, 10))

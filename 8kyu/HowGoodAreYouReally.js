/**
 * Day 1/365.
 * You receive an array with your peers' test scores. Now calculate the average and compare your score!
 * https://www.codewars.com/kata/5601409514fc93442500010b
 * @returns True if you're better, else False!
 */

function betterThanAverage(classPoints, yourPoints) {
  let averageClassPoint = 0

  // 0 + 100 + 40 + 34 + 57 + 29 + 72 + 57 + 88
  const totalPoint = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  averageClassPoint = totalPoint / classPoints.length

  return averageClassPoint < yourPoints
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))

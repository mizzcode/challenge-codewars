/**
 * Day 1/365.
 * https://www.codewars.com/kata/53af2b8861023f1d88000832
 * @returns name 'plays banjo' when first letter is starts from 'r' or 'R' otherwise 'does not play banjo'
 */

// function areYouPlayingBanjo(name) {
//   if (name.at(0) === 'R' || name.at(0) === 'r') {
//     name += ' plays banjo'
//   } else {
//     name += ' does not play banjo'
//   }

//   return name
// }

const areYouPlayingBanjo = (name) =>
  (name += name.at(0) === 'R' || name.at(0) === 'r' ? ' plays banjo' : ' does not play banjo')

console.log(areYouPlayingBanjo('Mizz'))

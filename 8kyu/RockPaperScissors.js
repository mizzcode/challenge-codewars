/**
 * Day 4/365.
 * https://www.codewars.com/kata/5672a98bdbdd995fad00000f
 * Rock Paper Scissors
 * @returns which player won! In case of a draw return Draw!.
 */

// scissors = gunting
// rock = batu
// paper = kertas
// const rps = (p1, p2) => {
//   if (p1 == 'rock' && p2 == 'scissors') {
//     return 'Player 1 won!'
//   } else if (p1 == 'scissors' && p2 == 'paper') {
//     return 'Player 1 won!'
//   } else if (p1 == 'paper' && p2 == 'rock') {
//     return 'Player 1 won!'
//   } else if (p1 == 'scissors' && p2 == 'rock') {
//     return 'Player 2 won!'
//   } else if (p1 == 'paper' && p2 == 'scissors') {
//     return 'Player 2 won!'
//   } else if (p1 == 'rock' && p2 == 'paper') {
//     return 'Player 2 won!'
//   } else if (p1 == p2) {
//     return 'Draw!'
//   }
// }

const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!'

  const rules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  }

  if (p2 === rules[p1]) {
    return 'Player 1 won!'
  }

  return 'Player 2 won!'
}

console.log(rps('rock', 'scissors'))
console.log(rps('scissors', 'paper'))
console.log(rps('paper', 'rock'))

console.log(rps('scissors', 'rock'))
console.log(rps('paper', 'scissors'))
console.log(rps('rock', 'paper'))

console.log(rps('rock', 'rock'))
console.log(rps('scissors', 'scissors'))
console.log(rps('paper', 'paper'))

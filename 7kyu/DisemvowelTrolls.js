/**
 * Day 5/365.
 * https://www.codewars.com/kata/52fba66badcd10859f00097e
 * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
 * Your task is to write a function that takes a string
 * @returns a new string with all vowels removed.
 */

// function disemvowel(str) {
//   const vowels = ['a', 'i', 'u', 'e', 'o']

//   let newStr = ''

//   for (let i = 0; i < str.length; i++) {
//     const deleteVowel = vowels.includes(str.toLowerCase().at(i))
//     if (!deleteVowel) {
//       newStr += str.at(i)
//     }
//   }

//   return newStr
// }

function disemvowel(str) {
  return str.replace(/[aiueo]/gi, '')
}

console.log(disemvowel('This website is for losers LOL!'))
console.log(disemvowel('LMAO'))

/**
 * Day 7/365.
 * https://www.codewars.com/kata/5390bac347d09b7da40006f6
 * @returns capitalize for each word
 */

// String.prototype.toJadenCase = function () {
//   const split = this.split(' ')

//   let newStr = ''

//   for (let i = 0; i < split.length; i++) {
//     newStr += split[i].replace(split[i].charAt(0), split[i].toUpperCase().charAt(0)) + ' '
//   }

//   const jadenCase = newStr.trimEnd()

//   return jadenCase
// };

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

let str = 'mizz jani'
console.log(str.toJadenCase())
/**
 * Day 1/365.
 * https://www.codewars.com/kata/5772da22b89313a4d50012f7
 * @returns Hello boss when name equals owner. Otherwise Hello guest
 */

function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}

console.log(greet('Mizz', 'Mizz'))

/**
 * Day 2/365.
 * https://www.codewars.com/kata/5861d28f124b35723e00005e
 * @returns a true when cars is possible to get to the pump, otherwise return false!
 */

// bisa dikatakan
// param1 = jarak ke pom bensin
// param2 = kecepatan mobil
// param3 = jam
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if (mpg * fuelLeft >= distanceToPump) return true
  return false
}

console.log(zeroFuel(60, 30, 3))

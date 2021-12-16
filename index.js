function findMatching(drivers, name) {
  return drivers.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, initials) {
  return drivers.filter((driver) => {
    return driver.startsWith(initials);
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name === name;
  });
}

// * `matchName` - This function takes an array of `driver` objects and a`string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.

// * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
//   with the provided letters.

// let arr = [1, 2, 3, 3, 5, 1, 7]

// [1, 2, 3, 3, 1]
// [3, 3]
// []

// let drivers = [{ name: "Jake", age: 17 }, { name: "Vanessa", age: 35 }, { name: "Morgan", age: 59 }]
// let foods = [{name: "apple"}]
// function findOverAge(drivers, age) {
//   return drivers.filter((driver) => {
//     return driver.age > age
//   })
// }

// arr.filter((number) => {
//   return number < 4
// })

// arr.filter(num => {
//     return num === 3
//   })

// You'll be writing three functions:

// * `findMatching`- This function takes an array of drivers' names and a `string`
//   as arguments, and returns the matching list of drivers. The function should be
//   case insensitive.

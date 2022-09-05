"use strict";

// ------forEach, concat--------------------/

// function flatten(arr) {
//   let newArr = [];
//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       newArr = newArr.concat(flatten(element));
//     } else {
//       newArr.push(element);
//     }
//   });
//   return newArr;
// }

// ------reduce, spread--------------------/

function flatten(arr) {
  return arr.reduce(
    (acc, element) =>
      Array.isArray(element)
        ? [...acc, ...flatten(element)]
        : [...acc, element],
    []
  );
}

console.log(flatten([1, 2, {}, [3, [4], 5], [6, "seven"]]));

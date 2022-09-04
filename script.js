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
  let flatArray = [...arr];
  flatArray = arr.reduce((acc, element) => {
    if (Array.isArray(element)) {
      return [...acc, ...flatten(element)];
    } else {
      return [...acc, element];
    }
  }, []);
  return flatArray;
}

console.log(flatten([1, 2, {}, [3, [4], 5], [6, "seven"]]));

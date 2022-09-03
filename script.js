"use strict";

function flatten(arr) {
  let newArr = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      newArr = newArr.concat(flatten(element));
    } else {
      newArr.push(element);
    }
  });
  return newArr;
}

console.log(flatten([1, 2, {}, [3, [4], 5], [6, "seven"]]));
